import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { api } from "../../utils/axiosConfig";
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  KeyRound,
  Loader2,
} from "lucide-react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";

type PreviewResponse = {
  success: boolean;
  data?: {
    title: string;
    previewContent: string;
    isSeen?: boolean;
  };
  message?: string;
  canReadMore?: boolean;
};

type VerifyResponse = {
  success: boolean;
  data?: {
    title: string;
    fullContent: string;
    isSeen?: boolean;
  };
  message?: string;
};

/* ✅ HTML Renderer with full support for your content */
function HtmlContent({ html }: { html: string }) {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: 2,
        minHeight: 80,

        /* ===== TEXT SPACING ===== */
        "& p": { my: 1, lineHeight: 1.8 },
        "& a": { color: "primary.main", textDecoration: "underline" },

        /* ===== HEADINGS ===== */
        "& h1": { fontSize: "1.6rem", fontWeight: 800, mt: 2.5, mb: 1 },
        "& h2": { fontSize: "1.25rem", fontWeight: 800, mt: 2.25, mb: 1 },
        "& h3": { fontSize: "1.1rem", fontWeight: 700, mt: 2, mb: 1 },

        /* ===== LISTS (FIX BULLETS) ===== */
        "& ul": { listStyleType: "disc", pl: 3.2, my: 1 },
        "& ol": { listStyleType: "decimal", pl: 3.2, my: 1 },
        "& li": { display: "list-item", my: 0.6 },

        /* ===== BLOCKQUOTE ===== */
        "& blockquote": {
          borderLeft: "4px solid",
          borderColor: "divider",
          pl: 2,
          ml: 0,
          my: 2,
          color: "text.secondary",
          backgroundColor: "action.hover",
          borderRadius: 1.5,
          paddingTop: 1,
          paddingBottom: 1,
        },

        /* ===== HORIZONTAL LINE ===== */
        "& hr": {
          my: 2,
          border: 0,
          borderTop: "1px solid",
          borderColor: "divider",
        },

        /* ===== TABLE SUPPORT ===== */
        "& table": {
          width: "100%",
          borderCollapse: "collapse",
          my: 2,
          display: "block",
          overflowX: "auto", // ✅ mobile scroll
          whiteSpace: "nowrap",
        },
        "& th, & td": {
          border: "1px solid",
          borderColor: "divider",
          padding: "10px 12px",
          textAlign: "left",
          verticalAlign: "top",
          whiteSpace: "normal", // ✅ allow wrapping inside cells
          minWidth: 140,
        },
        "& th": {
          fontWeight: 800,
          backgroundColor: "action.hover",
        },

        /* ===== FIGURE CALLOUT SUPPORT ===== */
        "& figure": {
          margin: "16px 0",
          padding: "14px 14px",
          borderRadius: "12px",
          backgroundColor: "action.hover",
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
        },

        /* ✅ if your HTML includes <span class="icon"> */
        "& .icon": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "6px",
        },

        "& img": { maxWidth: "100%" },
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function StrategyView() {
  const { title: titleParam } = useParams<{ title: string }>();
  const [searchParams] = useSearchParams();

  const urlTitle = useMemo(() => {
    const raw = titleParam || searchParams.get("title") || "";
    return raw ? decodeURIComponent(raw) : "";
  }, [titleParam, searchParams]);

  const [previewTitle, setPreviewTitle] = useState("");
  const [previewHtml, setPreviewHtml] = useState("");
  const [fullHtml, setFullHtml] = useState("");

  const [phrase, setPhrase] = useState("");
  const [canReadMore, setCanReadMore] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  const [loadingPreview, setLoadingPreview] = useState(false);
  const [loadingFull, setLoadingFull] = useState(false);

  const [msg, setMsg] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });

  const fetchPreview = async (t: string) => {
    setMsg({ type: "", text: "" });
    setFullHtml("");
    setPreviewHtml("");
    setPreviewTitle("");
    setCanReadMore(false);

    if (!t.trim()) {
      setMsg({ type: "error", text: "No strategy title found in the URL." });
      return;
    }

    try {
      setLoadingPreview(true);

      const res = await api.get<PreviewResponse>("/api/strategy/preview", {
        params: { title: t.trim() },
      });

      if (!res.data?.success || !res.data?.data) {
        setMsg({
          type: "error",
          text: res.data?.message || "Strategy not found.",
        });
        return;
      }

      setPreviewTitle(res.data.data.title);
      setPreviewHtml(res.data.data.previewContent || "");
      setIsSeen(Boolean(res.data.data.isSeen));
      setCanReadMore(Boolean(res.data.canReadMore));
    } catch (err: any) {
      const text =
        err.response?.data?.message ||
        err.message ||
        "Failed to load preview";
      setMsg({ type: "error", text });
    } finally {
      setLoadingPreview(false);
    }
  };

  const unlockFull = async () => {
    setMsg({ type: "", text: "" });

    if (!previewTitle.trim()) {
      setMsg({ type: "error", text: "Preview not loaded." });
      return;
    }

    // ✅ No 16-word requirement anymore (just require non-empty)
    if (!phrase.trim()) {
      setMsg({ type: "error", text: "Please enter the access phrase." });
      return;
    }

    try {
      setLoadingFull(true);

      const res = await api.post<VerifyResponse>("/api/strategy/verify", {
        title: previewTitle,
        phrase: phrase.trim(),
      });

      if (!res.data?.success || !res.data?.data) {
        setMsg({ type: "error", text: res.data?.message || "Access denied." });
        return;
      }

      setFullHtml(res.data.data.fullContent || "");
      setIsSeen(Boolean(res.data.data.isSeen));
      setMsg({ type: "success", text: "Unlocked full content." });
    } catch (err: any) {
      const text =
        err.response?.data?.message ||
        err.message ||
        "Failed to unlock content";
      setMsg({ type: "error", text });
    } finally {
      setLoadingFull(false);
    }
  };

  useEffect(() => {
    if (urlTitle) fetchPreview(urlTitle);
    else setMsg({ type: "error", text: "No strategy title found in URL." });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlTitle]);

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", p: 2, mt: 4 }}>
      <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
        <FileText size={22} />
        <Typography variant="h5" fontWeight={700}>
          Strategy Viewer
        </Typography>
      </Stack>

      {msg.text && (
        <Alert
          severity={msg.type === "error" ? "error" : "success"}
          icon={
            msg.type === "error" ? (
              <AlertCircle size={18} />
            ) : (
              <CheckCircle2 size={18} />
            )
          }
          sx={{ mb: 2 }}
        >
          {msg.text}
        </Alert>
      )}

      {loadingPreview && (
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
          <CircularProgress size={18} />
          <Typography variant="body2">Loading preview…</Typography>
        </Stack>
      )}

      {previewTitle && (
        <Card variant="outlined" sx={{ borderRadius: 3, mb: 2 }}>
          <CardContent>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              mb={1}
            >
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  {previewTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Title from URL: <b>{urlTitle || "—"}</b>
                </Typography>
              </Box>

              <Chip
                icon={isSeen ? <Eye size={16} /> : <EyeOff size={16} />}
                label={isSeen ? "Seen" : "Not seen"}
                variant="outlined"
              />
            </Stack>

            <Divider sx={{ my: 1.5 }} />
            <HtmlContent html={previewHtml} />
          </CardContent>
        </Card>
      )}

      {previewTitle && canReadMore && (
        <Card variant="outlined" sx={{ borderRadius: 3, mb: 2 }}>
          <CardContent>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <KeyRound size={18} />
                <Typography variant="h6" fontWeight={700}>
                  Unlock Full Content
                </Typography>
              </Stack>

              <TextField
                label="Access phrase"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
                placeholder="Enter access phrase"
                fullWidth
                size="small"
              />

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                justifyContent="flex-end"
                alignItems={{ xs: "flex-start", sm: "center" }}
              >
                <Button
                  variant="contained"
                  onClick={unlockFull}
                  disabled={loadingFull}
                  startIcon={
                    loadingFull ? <Loader2 size={18} /> : <KeyRound size={18} />
                  }
                >
                  {loadingFull ? "Unlocking..." : "Unlock"}
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      )}

      {fullHtml && (
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight={700} mb={1}>
              Full Content
            </Typography>

            <Divider sx={{ mb: 1.5 }} />
            <HtmlContent html={fullHtml} />
          </CardContent>
        </Card>
      )}
    </Box>
  );
}