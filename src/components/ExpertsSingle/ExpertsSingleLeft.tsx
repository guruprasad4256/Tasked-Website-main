import ExpertTestimonials from "../../components/ExpertsSingle/ExpertTestimonials";
import ExpertExperience from "../../components/ExpertsSingle/ExpertExperience";

const AchievementsSection = () => {
  return (
    <div className="relative bg-black text-white py-16 px-8 md:px-20">
      {/* Content */}
      <div className="relative z-10 max-w-4xl">   
        {/* About */}
        <h2 className="text-2xl font-bold mb-4 underline decoration-white decoration-1 underline-offset-8">
          About
        </h2>
        <p className="text-gray-200 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur 
          vehicula, felis ac varius pretium, magna turpis tristique lacus, a 
          aliquet tortor magna vel nisi. Integer eu sem at metus bibendum 
          tincidunt. Duis facilisis dignissim mi, vitae viverra purus posuere 
          eget. Sed fringilla eros vitae justo cursus, in imperdiet magna 
          iaculis.
        </p>
<ExpertTestimonials />
<ExpertExperience />
        {/* Achievements */}
        <h2 className="text-2xl font-bold mb-4 mt-10 underline decoration-white decoration-1 underline-offset-8">
          Achievements
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Instructor OS and Discrete Maths</li>
          <li>Academic Excellence Award at IIT Kanpur</li>
          <li>Runner Up Microsoft Code.Fun.Do Hackathon</li>
          <li>Finalist in SnackDown 2015</li>
          <li>Honorable Mention at ICPC Kharagpur site 2015</li>
          <li>All India Rank in HackerrankCodesprint 2014</li>
        </ul>

        {/* Education */}
        <h2 className="text-2xl font-bold mt-10 mb-4 underline decoration-white decoration-1 underline-offset-8">
          Education
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Master of Design from IIT Kanpur</li>
          <li>Bachelor of Design from BMS College of Engineering</li>
        </ul>
      </div>
    </div>
  );
};

export default AchievementsSection;
