import React, { useState } from 'react';
import { User, MessageSquare, Book, Home, Loader, ChevronLeft, CheckCircle, XCircle, Mail } from 'lucide-react';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation Components
  const DesktopNav = () => (
    <nav className="hidden md:flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md rounded-b-xl px-8">
      <div className="text-3xl font-bold text-black font-['Great_Vibes']">EmpressLope Beauty Shop</div>
      <div className="flex space-x-6 text-lg font-medium">
        <button onClick={() => setCurrentPage('home')} className={`text-white hover:text-purple-200 transition-colors ${currentPage === 'home' ? 'text-purple-200 font-semibold' : ''}`}>
          <Home className="inline-block mr-1" size={20} /> Home
        </button>
        <button onClick={() => setCurrentPage('consultation')} className={`text-white hover:text-purple-200 transition-colors ${currentPage === 'consultation' ? 'text-purple-200 font-semibold' : ''}`}>
          <MessageSquare className="inline-block mr-1" size={20} /> Consultation
        </button>
        <button onClick={() => setCurrentPage('blog')} className={`text-white hover:text-purple-200 transition-colors ${currentPage === 'blog' ? 'text-purple-200 font-semibold' : ''}`}>
          <Book className="inline-block mr-1" size={20} /> Blog
        </button>
        <button className="text-white hover:text-purple-200 transition-colors">About Us</button>
        {/* Updated Contact button to navigate to new Contact Page */}
        <button onClick={() => setCurrentPage('contact')} className="text-white hover:text-purple-200 transition-colors">Contact</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
          <User className="text-white" size={24} />
        </button>
      </div>
    </nav>
  );

  const MobileNav = () => (
    <nav className="md:hidden flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md rounded-b-xl px-4">
      <div className="text-2xl font-bold text-black font-['Great_Vibes']">EmpressLope Beauty Shop</div>
      <div className="flex items-center space-x-3">
        {/* Updated Contact button in mobile nav to navigate to new Contact Page */}
        <button onClick={() => setCurrentPage('contact')} className="text-white hover:text-purple-200 transition-colors text-sm font-medium">Contact</button>
        <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
          <User className="text-white" size={20} />
        </button>
      </div>
    </nav>
  );

  const MobilePageNavigation = () => (
    <div className="md:hidden flex overflow-x-auto p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md mx-4 mt-2 justify-around">
      <button
        onClick={() => setCurrentPage('home')}
        className={`flex-shrink-0 px-4 py-2 mx-1 text-sm font-medium rounded-full transition-all duration-200 ${
          currentPage === 'home' ? 'bg-white text-purple-700 shadow-lg' : 'bg-transparent text-white hover:bg-white/20'
        }`}
      >
        <Home className="inline-block mr-1" size={16} /> Home
      </button>
      <button
        onClick={() => setCurrentPage('consultation')}
        className={`flex-shrink-0 px-4 py-2 mx-1 text-sm font-medium rounded-full transition-all duration-200 ${
          currentPage === 'consultation' ? 'bg-white text-purple-700 shadow-lg' : 'bg-transparent text-white hover:bg-white/20'
        }`}
      >
        <MessageSquare className="inline-block mr-1" size={16} /> Consultation
      </button>
      <button
        onClick={() => setCurrentPage('blog')}
        className={`flex-shrink-0 px-4 py-2 mx-1 text-sm font-medium rounded-full transition-all duration-200 ${
          currentPage === 'blog' ? 'bg-white text-purple-700 shadow-lg' : 'bg-transparent text-white hover:bg-white/20'
        }`}
      >
        <Book className="inline-block mr-1" size={16} /> Blog
      </button>
    </div>
  );

  // Home Page Component
  const HomePage = ({ setCurrentPage }) => (
    <div
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-4 text-center bg-cover bg-center"
      style={{ backgroundImage: `url('https://i.pinimg.com/originals/08/3b/84/083b8461d6984df4ec119f791f48f7a5.jpg')` }}
    >
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-white"> {/* Text content above the overlay */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Personalized Skincare Journey Starts Here
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl">
          Unlock your skin's full potential with expert advice and tailored recommendations.
          Discover solutions crafted just for you.
        </p>
        <button
          onClick={() => setCurrentPage('consultation')}
          className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
        >
          Start Your Free Consultation
        </button>
      </div>
    </div>
  );

  // Consultation Page Component
  const ConsultationPage = ({ setCurrentPage }) => {
    // State for each section of the form
    const [clientProfile, setClientProfile] = useState({
      ageGroup: '',
      gender: '',
      raceEthnicity: [],
      raceEthnicityOther: '',
    });

    const [skinConcernsGoals, setSkinConcernsGoals] = useState({
      mainSkinConcerns: [],
      mainSkinConcernsOther: '',
      treatmentGoals: [],
      treatmentGoalsOther: '',
      timelineForResults: '',
    });

    const [skinTypeCondition, setSkinTypeCondition] = useState({
      perceivedSkinType: '',
      currentSkinCondition: [],
      currentSkinConditionOther: '',
      fitzpatrickSkinType: '',
    });

    const [currentSkincareRoutine, setCurrentSkincareRoutine] = useState({
      morningRoutine: [],
      eveningRoutine: [],
      exfoliationFrequency: '',
    });

    const [medicalSkinHistory, setMedicalSkinHistory] = useState({
      skinConditions: [],
      skinConditionsOther: '',
      allergies: [],
      allergiesSkincare: '',
      allergiesMedication: '',
      allergiesFood: '',
      currentMedications: [],
      currentMedicationsOther: '',
      pregnancyBreastfeeding: null,
    });

    const [lifestyleFactors, setLifestyleFactors] = useState({
      dietHydration: { diet: '', waterIntake: '' },
      sleep: '',
      stressLevel: '',
      exerciseFrequency: '',
      smoking: null,
      alcoholConsumption: '',
    });

    const [sunProtectionExposure, setSunProtectionExposure] = useState({
      useSunscreenDaily: null,
      timeOutdoorsDaily: '',
      historySunburns: null,
      tanningBedUse: null,
    });

    const [aiResponse, setAiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ type: '', message: '' });

    // Handle checkbox changes for array states (generic)
    const handleArrayCheckboxChange = (stateVar, setStateVar, field, value) => {
      setStateVar(prevState => {
        const currentValues = prevState[field];
        if (currentValues.includes(value)) {
          return { ...prevState, [field]: currentValues.filter(item => item !== value) };
        } else {
          return { ...prevState, [field]: [...currentValues, value] };
        }
      });
    };

    const generateSkinProfileSummary = () => {
        let summary = "User Skincare Profile:\n\n";

        // Section 1 – Client Profile
        summary += "## Client Profile\n";
        if (clientProfile.ageGroup) summary += `Age Group: ${clientProfile.ageGroup}\n`;
        if (clientProfile.gender) {
            summary += `Gender: ${clientProfile.gender}\n`;
        }
        if (clientProfile.raceEthnicity.length > 0) {
            summary += `Race/Ethnicity: ${clientProfile.raceEthnicity.join(', ')}`;
            if (clientProfile.raceEthnicity.includes('Other') && clientProfile.raceEthnicityOther) {
                summary += ` (${clientProfile.raceEthnicityOther})\n`;
            } else {
                summary += '\n';
            }
        }
        summary += "\n";

        // Section 2 – Skin Concerns & Goals
        summary += "## Skin Concerns & Goals\n";
        if (skinConcernsGoals.mainSkinConcerns.length > 0) {
            summary += `Main Skin Concerns: ${skinConcernsGoals.mainSkinConcerns.join(', ')}`;
            if (skinConcernsGoals.mainSkinConcerns.includes('Other') && skinConcernsGoals.mainSkinConcernsOther) {
                summary += ` (${skinConcernsGoals.mainSkinConcernsOther})\n`;
            } else {
                summary += '\n';
            }
        }
        if (skinConcernsGoals.treatmentGoals.length > 0) {
            summary += `Treatment Goals: ${skinConcernsGoals.treatmentGoals.join(', ')}`;
            if (skinConcernsGoals.treatmentGoals.includes('Other') && skinConcernsGoals.treatmentGoalsOther) {
                summary += ` (${skinConcernsGoals.treatmentGoalsOther})\n`;
            } else {
                summary += '\n';
            }
        }
        if (skinConcernsGoals.timelineForResults) summary += `Timeline for Results: ${skinConcernsGoals.timelineForResults}\n`;
        summary += "\n";

        // Section 3 – Skin Type & Condition
        summary += "## Skin Type & Condition\n";
        if (skinTypeCondition.perceivedSkinType) summary += `Perceived Skin Type: ${skinTypeCondition.perceivedSkinType}\n`;
        if (skinTypeCondition.currentSkinCondition.length > 0) {
            summary += `Current Skin Condition: ${skinTypeCondition.currentSkinCondition.join(', ')}`;
            if (skinTypeCondition.currentSkinCondition.includes('Other') && skinTypeCondition.currentSkinConditionOther) {
                summary += ` (${skinTypeCondition.currentSkinConditionOther})\n`;
            } else {
                summary += '\n';
            }
        }
        if (skinTypeCondition.fitzpatrickSkinType) summary += `Fitzpatrick Skin Type: ${skinTypeCondition.fitzpatrickSkinType}\n`;
        summary += "\n";

        // Section 4 – Current Skincare Routine
        summary += "## Current Skincare Routine\n";
        if (currentSkincareRoutine.morningRoutine.length > 0) {
            summary += `Morning Routine: ${currentSkincareRoutine.morningRoutine.join(', ')}\n`;
        } else {
            summary += `Morning Routine: Not specified\n`;
        }
        if (currentSkincareRoutine.eveningRoutine.length > 0) {
            summary += `Evening Routine: ${currentSkincareRoutine.eveningRoutine.join(', ')}\n`;
        } else {
            summary += `Evening Routine: Not specified\n`;
        }
        if (currentSkincareRoutine.exfoliationFrequency) summary += `Frequency of Exfoliation: ${currentSkincareRoutine.exfoliationFrequency}\n`;
        summary += "\n";

        // Section 5 – Medical & Skin History
        summary += "## Medical & Skin History\n";
        if (medicalSkinHistory.skinConditions.length > 0) {
            summary += `Skin Conditions (past or present): ${medicalSkinHistory.skinConditions.join(', ')}`;
            if (medicalSkinHistory.skinConditions.includes('Other') && medicalSkinHistory.skinConditionsOther) {
                summary += ` (${medicalSkinHistory.skinConditionsOther})\n`;
            } else {
                summary += '\n';
            }
        }
        if (medicalSkinHistory.allergies.length > 0) {
            summary += `Allergies: ${medicalSkinHistory.allergies.join(', ')}\n`;
            if (medicalSkinHistory.allergies.includes('Skincare ingredient(s):') && medicalSkinHistory.allergiesSkincare) {
                summary += `- Skincare Ingredient(s): ${medicalSkinHistory.allergiesSkincare}\n`;
            }
            if (medicalSkinHistory.allergies.includes('Medication:') && medicalSkinHistory.allergiesMedication) {
                summary += `- Medication: ${medicalSkinHistory.allergiesMedication}\n`;
            }
            if (medicalSkinHistory.allergies.includes('Food:') && medicalSkinHistory.allergiesFood) {
                summary += `- Food: ${medicalSkinHistory.allergiesFood}\n`;
            }
        } else if (medicalSkinHistory.allergies.length === 0 && medicalSkinHistory.allergiesSkincare === '' && medicalSkinHistory.allergiesMedication === '' && medicalSkinHistory.allergiesFood === '') {
             summary += `Allergies: None\n`;
        }
        if (medicalSkinHistory.currentMedications.length > 0) {
            summary += `Current Medications: ${medicalSkinHistory.currentMedications.join(', ')}`;
            if (medicalSkinHistory.currentMedications.includes('Other:') && medicalSkinHistory.currentMedicationsOther) {
                summary += ` (${medicalSkinHistory.currentMedicationsOther})\n`;
            } else {
                summary += '\n';
            }
        } else if (medicalSkinHistory.currentMedications.length === 0 && medicalSkinHistory.currentMedicationsOther === '') {
             summary += `Current Medications: None\n`;
        }
        if (medicalSkinHistory.pregnancyBreastfeeding !== null) summary += `Pregnancy/Breastfeeding: ${medicalSkinHistory.pregnancyBreastfeeding ? 'Yes' : 'No'}\n`;
        summary += "\n";

        // Section 6 – Lifestyle Factors
        summary += "## Lifestyle Factors\n";
        if (lifestyleFactors.dietHydration.diet) summary += `Diet: ${lifestyleFactors.dietHydration.diet}\n`;
        if (lifestyleFactors.dietHydration.waterIntake) summary += `Water Intake/Day: ${lifestyleFactors.dietHydration.waterIntake}\n`;
        if (lifestyleFactors.sleep) summary += `Sleep: ${lifestyleFactors.sleep}\n`;
        if (lifestyleFactors.stressLevel) summary += `Stress Level: ${lifestyleFactors.stressLevel}\n`;
        if (lifestyleFactors.exerciseFrequency) summary += `Exercise Frequency: ${lifestyleFactors.exerciseFrequency}\n`;
        if (lifestyleFactors.smoking !== null) summary += `Smoking: ${lifestyleFactors.smoking ? 'Yes' : 'No'}\n`;
        if (lifestyleFactors.alcoholConsumption) summary += `Alcohol Consumption: ${lifestyleFactors.alcoholConsumption}\n`;
        summary += "\n";

        // Section 7 – Sun Protection & Exposure
        summary += "## Sun Protection & Exposure\n";
        if (sunProtectionExposure.useSunscreenDaily !== null) summary += `Use Sunscreen Daily: ${sunProtectionExposure.useSunscreenDaily ? 'Yes' : 'No'}\n`;
        if (sunProtectionExposure.timeOutdoorsDaily) summary += `Time Spent Outdoors Daily: ${sunProtectionExposure.timeOutdoorsDaily}\n`;
        if (sunProtectionExposure.historySunburns !== null) summary += `History of Sunburns: ${sunProtectionExposure.historySunburns ? 'Yes' : 'No'}\n`;
        if (sunProtectionExposure.tanningBedUse !== null) summary += `Tanning Bed Use: ${sunProtectionExposure.tanningBedUse ? 'Yes' : 'No'}\n`;
        
        return summary;
    };


    const handleConsultationSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setAiResponse('');
      setErrorMessage('');

      const skinProfileSummary = generateSkinProfileSummary();

      const prompt = `Based on the following user skincare profile, please provide a personalized skincare routine and product ingredient recommendations. Structure your response clearly, including:\n\n1. AM Routine (Cleanser, Serum, Moisturizer, SPF)\n2. PM Routine (Cleanser, Treatment, Moisturizer)\n3. Specific Product Ingredient Recommendations (e.g., Hyaluronic Acid, Salicylic Acid, Vitamin C)\n4. General Skincare Tips\n\nKeep the recommendations concise and actionable. Prioritize ingredients and routine steps over specific brand names. Here is the user's profile:\n\n${skinProfileSummary}`;


      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will automatically provide this at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      let retries = 0;
      const maxRetries = 5;
      const baseDelay = 1000; // 1 second

      while (retries < maxRetries) {
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            if (response.status === 429) { // Too Many Requests
              const delay = Math.pow(2, retries) * baseDelay + Math.random() * baseDelay;
              console.log(`Rate limit hit, retrying in ${delay / 1000}s...`);
              await new Promise(res => setTimeout(res, delay));
              retries++;
              continue; // Retry the request
            } else {
              setErrorMessage(`HTTP error! status: ${response.status}`);
              setModalContent({ type: 'error', message: `Failed to get consultation: HTTP error ${response.status}` });
              setShowModal(true);
              setIsLoading(false); // Ensure loading is false on direct exit
              break; // Exit loop on critical error
            }
          }

          const result = await response.json();
          if (result.candidates && result.candidates.length > 0 &&
              result.candidates[0].content && result.candidates[0].content.parts &&
              result.candidates[0].content.parts.length > 0) {
            setAiResponse(result.candidates[0].content.parts[0].text);
            setModalContent({ type: 'success', message: 'Your personalized skincare plan is ready!' });
            setShowModal(true);
            setIsLoading(false); // Ensure loading is false on direct exit
            break; // Exit loop on success
          } else {
            setErrorMessage('Received an empty or malformed response from the AI.');
            setModalContent({ type: 'error', message: 'Failed to get a personalized plan. Please try again.' });
            setShowModal(true);
            setIsLoading(false); // Ensure loading is false on direct exit
            break; // Exit loop, no retries for malformed response
          }
        } catch (error) {
          setErrorMessage(`Failed to get consultation: ${error.message}`);
          setModalContent({ type: 'error', message: `An error occurred: ${error.message}` });
          setShowModal(true);
          setIsLoading(false); // Ensure loading is false on direct exit
          break; // Exit loop on critical error
        }
      }
    };

    const InputField = ({ id, label, type = 'text', value, onChange, placeholder, rows }) => (
      <div>
        <label htmlFor={id} className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
        {type === 'textarea' ? (
          <textarea
            id={id}
            rows={rows}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          ></textarea>
        ) : (
          <input
            type={type}
            id={id}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    );

    const SelectField = ({ id, label, value, onChange, options }) => (
      <div>
        <label htmlFor={id} className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
        <select
          id={id}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
          value={value}
          onChange={onChange}
          required
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );

    const CheckboxGroup = ({ label, options, selectedValues, onChange, otherValue, onOtherChange, otherPlaceholder }) => (
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {options.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={`${label}-${option}`}
                value={option}
                checked={selectedValues.includes(option)}
                onChange={() => onChange(option)}
                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor={`${label}-${option}`} className="ml-2 text-gray-700 text-base">{option}</label>
            </div>
          ))}
        </div>
        {selectedValues.includes('Other') || selectedValues.includes('Other:') ? ( // Check for both "Other" and "Other:"
          <InputField
            id={`${label}-other`}
            label="Please specify 'Other'"
            value={otherValue}
            onChange={onOtherChange}
            placeholder={otherPlaceholder || "Specify here..."}
          />
        ) : null}
      </div>
    );

    const RadioGroup = ({ label, name, options, selectedValue, onChange }) => (
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {options.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="radio"
                id={`${name}-${option}`}
                name={name}
                value={option}
                checked={selectedValue === option}
                onChange={() => onChange(option)}
                className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              />
              <label htmlFor={`${name}-${option}`} className="ml-2 text-gray-700 text-base">{option}</label>
            </div>
          ))}
        </div>
      </div>
    );


    return (
      <div className="max-w-4xl mx-auto p-6 md:p-8 bg-purple-50 rounded-xl shadow-lg my-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get Your Personalized Skincare Consultation</h2>
        <p className="text-gray-600 text-center mb-8">
          Complete this detailed questionnaire for a precise, AI-powered skincare plan tailored just for you.
        </p>

        <form onSubmit={handleConsultationSubmit} className="space-y-10">
          {/* Section 1 – Client Profile */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Section 1 – Client Profile</h3>
            <div className="space-y-6">
              <SelectField
                id="ageGroup"
                label="Age Group:"
                value={clientProfile.ageGroup}
                onChange={(e) => setClientProfile({ ...clientProfile, ageGroup: e.target.value })}
                options={['Under 18', '18–24', '25–34', '35–44', '45–54', '65+']}
              />
              <RadioGroup
                label="Gender:"
                name="gender"
                options={['Female', 'Male']}
                selectedValue={clientProfile.gender}
                onChange={(value) => setClientProfile({ ...clientProfile, gender: value })}
              />
              <CheckboxGroup
                label="Race/Ethnicity:"
                options={['African / Black', 'Caucasian / White', 'Asian', 'Hispanic / Latino', 'Middle Eastern', 'Mixed Race', 'Other']}
                selectedValues={clientProfile.raceEthnicity}
                onChange={(value) => handleArrayCheckboxChange(clientProfile, setClientProfile, 'raceEthnicity', value)}
                otherValue={clientProfile.raceEthnicityOther}
                onOtherChange={(e) => setClientProfile({ ...clientProfile, raceEthnicityOther: e.target.value })}
                otherPlaceholder="Specify ethnicity"
              />
            </div>
          </div>

          {/* Section 2 – Skin Concerns & Goals */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Section 2 – Skin Concerns & Goals</h3>
            <div className="space-y-6">
              <CheckboxGroup
                label="Main Skin Concerns (check all that apply):"
                options={['Acne / Breakouts', 'Oiliness', 'Dryness / Flakiness', 'Dehydration', 'Fine Lines / Wrinkles', 'Loss of Elasticity / Sagging', 'Uneven Skin Tone', 'Hyperpigmentation / Dark Spots', 'Redness / Sensitivity', 'Sun Damage', 'Other']}
                selectedValues={skinConcernsGoals.mainSkinConcerns}
                onChange={(value) => handleArrayCheckboxChange(skinConcernsGoals, setSkinConcernsGoals, 'mainSkinConcerns', value)}
                otherValue={skinConcernsGoals.mainSkinConcernsOther}
                onOtherChange={(e) => setSkinConcernsGoals({ ...skinConcernsGoals, mainSkinConcernsOther: e.target.value })}
                otherPlaceholder="Specify other concerns"
              />
              <CheckboxGroup
                label="Treatment Goals:"
                options={['Clearer skin', 'Brighter complexion', 'Anti-aging / Wrinkle reduction', 'Hydration', 'Even skin tone', 'Reduce sensitivity', 'Other']}
                selectedValues={skinConcernsGoals.treatmentGoals}
                onChange={(value) => handleArrayCheckboxChange(skinConcernsGoals, setSkinConcernsGoals, 'treatmentGoals', value)}
                otherValue={skinConcernsGoals.treatmentGoalsOther}
                onOtherChange={(e) => setSkinConcernsGoals({ ...skinConcernsGoals, treatmentGoalsOther: e.target.value })}
                otherPlaceholder="Specify other goals"
              />
              <SelectField
                id="timelineForResults"
                label="Timeline for results:"
                value={skinConcernsGoals.timelineForResults}
                onChange={(e) => setSkinConcernsGoals({ ...skinConcernsGoals, timelineForResults: e.target.value })}
                options={['1–2 weeks', '1–3 months', '3–6 months', 'Ongoing maintenance']}
              />
            </div>
          </div>

          {/* Section 3 – Skin Type & Condition */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Section 3 – Skin Type & Condition</h3>
            <div className="space-y-6">
              <RadioGroup
                label="Perceived Skin Type:"
                name="perceivedSkinType"
                options={['Oily', 'Dry', 'Combination', 'Normal', 'Sensitive']}
                selectedValue={skinTypeCondition.perceivedSkinType}
                onChange={(value) => setSkinTypeCondition({ ...skinTypeCondition, perceivedSkinType: value })}
              />
              <CheckboxGroup
                label="Current Skin Condition:"
                options={['Hydrated', 'Dehydrated', 'Inflamed', 'Acne-prone', 'Congested / Clogged pores', 'Flaky / Rough texture', 'Other']}
                selectedValues={skinTypeCondition.currentSkinCondition}
                onChange={(value) => handleArrayCheckboxChange(skinTypeCondition, setSkinTypeCondition, 'currentSkinCondition', value)}
                otherValue={skinTypeCondition.currentSkinConditionOther}
                onOtherChange={(e) => setSkinTypeCondition({ ...skinTypeCondition, currentSkinConditionOther: e.target.value })}
                otherPlaceholder="Specify other conditions"
              />
              <SelectField
                id="fitzpatrickSkinType"
                label="Fitzpatrick Skin Type (optional):"
                value={skinTypeCondition.fitzpatrickSkinType}
                onChange={(e) => setSkinTypeCondition({ ...skinTypeCondition, fitzpatrickSkinType: e.target.value })}
                options={['I – Very fair, always burns', 'II – Fair, burns easily, tans minimally', 'III – Medium, sometimes mild burn, tans evenly', 'IV – Olive, rarely burns, tans easily', 'V – Brown, very rarely burns, tans profusely', 'VI – Dark brown/black, never burns']}
              />
            </div>
          </div>

          {/* Section 4 – Current Skincare Routine */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Section 4 – Current Skincare Routine</h3>
            <div className="space-y-6">
              {/* Morning Routine Checkboxes */}
              <CheckboxGroup
                label="Morning routine (check all that apply):"
                options={['Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen']}
                selectedValues={currentSkincareRoutine.morningRoutine}
                onChange={(value) => handleArrayCheckboxChange(currentSkincareRoutine, setCurrentSkincareRoutine, 'morningRoutine', value)}
                otherValue={''} // No "Other" for these now
                onOtherChange={() => {}} // No "Other" for these now
              />
              {/* Evening Routine Checkboxes */}
              <CheckboxGroup
                label="Evening routine (check all that apply):"
                options={['Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Treatment product (e.g., retinol, acids)']}
                selectedValues={currentSkincareRoutine.eveningRoutine}
                onChange={(value) => handleArrayCheckboxChange(currentSkincareRoutine, setCurrentSkincareRoutine, 'eveningRoutine', value)}
                otherValue={''} // No "Other" for these now
                onOtherChange={() => {}} // No "Other" for these now
              />
              <SelectField
                id="exfoliationFrequency"
                label="Frequency of exfoliation:"
                value={currentSkincareRoutine.exfoliationFrequency}
                onChange={(e) => setCurrentSkincareRoutine({ ...currentSkincareRoutine, exfoliationFrequency: e.target.value })}
                options={['Never', '1–2x/week', '3–4x/week', 'Daily']}
              />
            </div>
          </div>

          {/* Section 5 – Medical & Skin History */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Section 5 – Medical & Skin History</h3>
            <div className="space-y-6">
              <CheckboxGroup
                label="Skin conditions (past or present):"
                options={['Acne', 'Eczema', 'Psoriasis', 'Rosacea', 'Dermatitis', 'Keloids', 'Cold sores', 'Other']}
                selectedValues={medicalSkinHistory.skinConditions}
                onChange={(value) => handleArrayCheckboxChange(medicalSkinHistory, setMedicalSkinHistory, 'skinConditions', value)}
                otherValue={medicalSkinHistory.skinConditionsOther}
                onOtherChange={(e) => setMedicalSkinHistory({ ...medicalSkinHistory, skinConditionsOther: e.target.value })}
                otherPlaceholder="Specify other conditions"
              />
              <CheckboxGroup
                label="Allergies:"
                options={['None', 'Skincare ingredient(s):', 'Medication:', 'Food:']}
                selectedValues={medicalSkinHistory.allergies}
                onChange={(value) => handleArrayCheckboxChange(medicalSkinHistory, setMedicalSkinHistory, 'allergies', value)}
              />
              {medicalSkinHistory.allergies.includes('Skincare ingredient(s):') && (
                <InputField id="allergiesSkincare" label="Skincare ingredient(s) (specify):" value={medicalSkinHistory.allergiesSkincare} onChange={(e) => setMedicalSkinHistory({ ...medicalSkinHistory, allergiesSkincare: e.target.value })} />
              )}
              {medicalSkinHistory.allergies.includes('Medication:') && (
                <InputField id="allergiesMedication" label="Medication (specify):" value={medicalSkinHistory.allergiesMedication} onChange={(e) => setMedicalSkinHistory({ ...medicalSkinHistory, allergiesMedication: e.target.value })} />
              )}
              {medicalSkinHistory.allergies.includes('Food:') && (
                <InputField id="allergiesFood" label="Food (specify):" value={medicalSkinHistory.allergiesFood} onChange={(e) => setMedicalSkinHistory({ ...medicalSkinHistory, allergiesFood: e.target.value })} />
              )}
              <CheckboxGroup
                label="Current Medications:"
                options={['None', 'Hormonal therapy', 'Acne medication', 'Other:']}
                selectedValues={medicalSkinHistory.currentMedications}
                onChange={(value) => handleArrayCheckboxChange(medicalSkinHistory, setMedicalSkinHistory, 'currentMedications', value)}
                otherValue={medicalSkinHistory.currentMedicationsOther}
                onOtherChange={(e) => setMedicalSkinHistory({ ...medicalSkinHistory, currentMedicationsOther: e.target.value })}
                otherPlaceholder="Specify other medications"
              />
              <RadioGroup
                label="Pregnancy/Breastfeeding:"
                name="pregnancyBreastfeeding"
                options={['Yes', 'No']}
                selectedValue={medicalSkinHistory.pregnancyBreastfeeding === true ? 'Yes' : medicalSkinHistory.pregnancyBreastfeeding === false ? 'No' : ''}
                onChange={(value) => setMedicalSkinHistory({ ...medicalSkinHistory, pregnancyBreastfeeding: value === 'Yes' ? true : false })}
              />
            </div>
          </div>

          {/* Section 6 – Lifestyle Factors */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Section 6 – Lifestyle Factors</h3>
            <div className="space-y-6">
              <SelectField
                id="diet"
                label="Diet & hydration (Diet):"
                value={lifestyleFactors.dietHydration.diet}
                onChange={(e) => setLifestyleFactors(prev => ({ ...prev, dietHydration: { ...prev.dietHydration, diet: e.target.value } }))}
                options={['Balanced diet', 'High sugar/fats', 'Vegetarian/Vegan']}
              />
              <SelectField
                id="waterIntake"
                label="Water intake/day:"
                value={lifestyleFactors.dietHydration.waterIntake}
                onChange={(e) => { // Changed to explicit return for clarity and to resolve potential parsing issue
                  return setLifestyleFactors(prev => ({
                    ...prev,
                    dietHydration: {
                      ...prev.dietHydration,
                      waterIntake: e.target.value
                    }
                  }));
                }}
                options={['<1L', '1–2L', '2–3L', '3L+']}
              />
              <SelectField
                id="sleep"
                label="Sleep:"
                value={lifestyleFactors.sleep}
                onChange={(e) => setLifestyleFactors({ ...lifestyleFactors, sleep: e.target.value })}
                options={['<5 hrs/night', '5–7 hrs/night', '7–9 hrs/night', '9+ hrs/night']}
              />
              <SelectField
                id="stressLevel"
                label="Stress level:"
                value={lifestyleFactors.stressLevel}
                onChange={(e) => setLifestyleFactors({ ...lifestyleFactors, stressLevel: e.target.value })}
                options={['Low', 'Moderate', 'High']}
              />
              <SelectField
                id="exerciseFrequency"
                label="Exercise frequency:"
                value={lifestyleFactors.exerciseFrequency}
                onChange={(e) => setLifestyleFactors({ ...lifestyleFactors, exerciseFrequency: e.target.value })}
                options={['Never', '1–2x/week', '3–5x/week', 'Daily']}
              />
              <RadioGroup
                label="Smoking:"
                name="smoking"
                options={['Yes', 'No']}
                selectedValue={lifestyleFactors.smoking === true ? 'Yes' : lifestyleFactors.smoking === false ? 'No' : ''}
                onChange={(value) => setLifestyleFactors({ ...lifestyleFactors, smoking: value === 'Yes' ? true : false })}
              />
              <SelectField
                id="alcoholConsumption"
                label="Alcohol consumption:"
                value={lifestyleFactors.alcoholConsumption}
                onChange={(e) => setLifestyleFactors({ ...lifestyleFactors, alcoholConsumption: e.target.value })}
                options={['None', 'Occasionally', 'Frequently']}
              />
            </div>
          </div>

          {/* Section 7 – Sun Protection & Exposure */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Section 7 – Sun Protection & Exposure</h3>
            <div className="space-y-6">
              <RadioGroup
                label="Do you use sunscreen daily?"
                name="useSunscreenDaily"
                options={['Yes', 'No']}
                selectedValue={sunProtectionExposure.useSunscreenDaily === true ? 'Yes' : sunProtectionExposure.useSunscreenDaily === false ? 'No' : ''}
                onChange={(value) => setSunProtectionExposure({ ...sunProtectionExposure, useSunscreenDaily: value === 'Yes' ? true : false })}
              />
              <SelectField
                id="timeOutdoorsDaily"
                label="Time spent outdoors daily:"
                value={sunProtectionExposure.timeOutdoorsDaily}
                onChange={(e) => setSunProtectionExposure({ ...sunProtectionExposure, timeOutdoorsDaily: e.target.value })}
                options={['<30 min', '30–60 min', '1–3 hrs', '3+ hrs']}
              />
              <RadioGroup
                label="History of sunburns:"
                name="historySunburns"
                options={['Yes', 'No']}
                selectedValue={sunProtectionExposure.historySunburns === true ? 'Yes' : sunProtectionExposure.historySunburns === false ? 'No' : ''}
                onChange={(value) => setSunProtectionExposure({ ...sunProtectionExposure, historySunburns: value === 'Yes' ? true : false })}
              />
              <RadioGroup
                label="Tanning bed use:"
                name="tanningBedUse"
                options={['Yes', 'No']}
                selectedValue={sunProtectionExposure.tanningBedUse === true ? 'Yes' : sunProtectionExposure.tanningBedUse === false ? 'No' : ''}
                onChange={(value) => setSunProtectionExposure({ ...sunProtectionExposure, tanningBedUse: value === 'Yes' ? true : false })}
              />
            </div>
          </div>


          <button
            type="submit"
            className="w-full py-3 rounded-full bg-purple-600 text-white font-bold text-lg hover:bg-purple-700 transition-colors duration-300 shadow-md flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader className="animate-spin mr-2" size={20} /> Generating Recommendation...
              </>
            ) : (
              'Get My Skincare Plan'
            )}
          </button>
        </form>

        {errorMessage && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
            <p className="font-semibold">Error:</p>
            <p>{errorMessage}</p>
          </div>
        )}

        {aiResponse && (
          <div className="mt-8 p-6 bg-purple-50 rounded-lg shadow-inner border border-purple-200">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Your Personalized Skincare Plan:</h3>
            <div
              className="prose max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: aiResponse.replace(/\n/g, '<br />').replace(/\*/g, '').replace(/#/g, '') }}
            />
          </div>
        )}

        {/* Custom Modal for success/error messages */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
              {modalContent.type === 'success' ? (
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              ) : (
                <XCircle size={48} className="text-red-500 mx-auto mb-4" />
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{modalContent.type === 'success' ? 'Success!' : 'Oops!'}</h3>
              <p className="text-gray-600 mb-6">{modalContent.message}</p>
              <button
                onClick={() => {
                  setShowModal(false);
                  if (modalContent.type === 'success') {
                    // Optionally scroll to AI response or reset form
                  }
                }}
                className={`w-full py-3 rounded-full text-white font-bold text-lg transition-colors duration-300 ${
                  modalContent.type === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:hover:bg-red-700'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setCurrentPage('home')}
          className="mt-8 flex items-center justify-center mx-auto text-purple-600 hover:text-purple-800 transition-colors duration-200 font-semibold"
        >
          <ChevronLeft size={20} className="mr-2" /> Back to Home
        </button>
      </div>
    );
  };

  // Blog Page Component
  const BlogPage = ({ setCurrentPage }) => {
    const blogPosts = [
      {
        id: 'blog1',
        title: 'The Ultimate Guide to Hydrating Your Skin',
        date: 'August 10, 2025',
        excerpt: 'Discover the best ingredients and tips for keeping your skin plump and moisturized all year round. Hydration is key to a healthy skin barrier...',
        content: 'Hydration is fundamental for healthy, glowing skin. Dehydrated skin can look dull, feel tight, and even exacerbate the appearance of fine lines. To combat this, focus on ingredients like Hyaluronic Acid, Glycerin, and Ceramides. Hyaluronic Acid acts like a sponge, drawing moisture from the air into your skin. Glycerin is another powerful humectant, while Ceramides help to strengthen your skin\'s natural barrier, preventing moisture loss. Remember to drink plenty of water and use a gentle, hydrating cleanser to avoid stripping your skin\'s natural oils. Layering your products, starting with the thinnest consistency, can also help to lock in moisture effectively.'
      },
      {
        id: 'blog2',
        title: 'Understanding Vitamin C for Brighter Skin',
        date: 'July 25, 2025',
        excerpt: 'Learn how Vitamin C can transform your complexion, fade dark spots, and protect against environmental damage. It\'s a powerful antioxidant...',
        content: 'Vitamin C is a powerhouse ingredient renowned for its brightening and protective benefits. As a potent antioxidant, it helps to neutralize free radicals caused by UV exposure and pollution, which can lead to premature aging. Beyond protection, Vitamin C is crucial for collagen synthesis, helping to maintain skin elasticity and firmness. It also effectively inhibits melanin production, making it excellent for fading hyperpigmentation, sun spots, and post-inflammatory marks, leading to a more even and radiant skin tone. When incorporating Vitamin C, look for stable forms like L-Ascorbic Acid or derivatives, and store products in a cool, dark place to maintain their efficacy.'
      },
      {
        id: 'blog3',
        title: 'Acne Solutions: Beyond Spot Treatments',
        date: 'July 1, 2025',
        excerpt: 'Explore comprehensive strategies for managing acne, from gentle cleansing to targeted treatments and lifestyle adjustments. It\'s more than just a pimple...',
        content: 'Managing acne effectively often requires a holistic approach beyond just spot treatments. Start with a gentle, non-foaming cleanser to avoid irritating inflamed inflamed skin. Incorporate active ingredients like Salicylic Acid (BHA) for oil control and exfoliation within pores, or Benzoyl Peroxide for its antibacterial properties. For more persistent acne, retinoids can be highly effective in promoting cell turnover and preventing clogged pores. Beyond topicals, consider lifestyle factors suchs as diet, stress management, and ensuring your pillowcases are clean. Consistency is key, and it\'s often beneficial to consult with a dermatologist for severe or persistent cases.'
      }
    ];

    const [expandedPost, setExpandedPost] = useState(null);

    const toggleReadMore = (id) => {
      setExpandedPost(expandedPost === id ? null : id);
    };

    return (
      <div
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-4 text-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://drive.google.com/uc?id=15pumdS4OGiJZgzfZ6aS6-tG1tg0uZZqC')` }}
      >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto p-6 md:p-8 bg-white/80 rounded-xl shadow-lg my-8"> {/* Added white overlay with transparency */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Skincare Blog</h2>

          {/* New section for external blog link */}
          <div className="mb-10 p-6 bg-purple-50 rounded-lg shadow-inner border border-purple-200 text-center">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Looking for more articles?</h3>
            <p className="text-gray-700 mb-4">
              Visit our comprehensive main blog for even more in-depth skincare insights, tips, and product reviews!
            </p>
            <a
              href="https://empresslope.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-purple-700 transition-colors duration-300 shadow-md transform hover:scale-105"
            >
              Visit Our Main Blog
            </a>
          </div>
          {/* End new section */}


          <div className="space-y-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-4">
                  {expandedPost === post.id ? post.content : post.excerpt}
                  {post.content.length > post.excerpt.length && (
                    <button onClick={() => toggleReadMore(post.id)} className="text-purple-600 hover:underline ml-2 font-medium">
                      {expandedPost === post.id ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage('home')}
            className="mt-8 flex items-center justify-center mx-auto text-purple-600 hover:text-purple-800 transition-colors duration-200 font-semibold"
          >
            <ChevronLeft size={20} className="mr-2" /> Back to Home
          </button>
        </div>
      </div>
    );
  };

  // New ContactPage Component
  const ContactPage = ({ setCurrentPage }) => {
    return (
      <div
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-4 text-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://drive.google.com/uc?id=1j_SR_WipYGAGUlXHcuCWq_vvtIZJOxRQ')` }}
      >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-xl mx-auto p-6 md:p-8 bg-purple-50/80 rounded-xl shadow-lg my-8 text-center"> {/* Added transparent background to content block */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
            <Mail className="mr-3" size={32} /> Contact EmpressLope Beauty Shop
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            We'd love to hear from you! For any inquiries, consultations, or feedback, please reach out to us directly via email:
          </p>
          <p className="text-3xl font-bold text-purple-700 mb-8">
            <a href="mailto:theempresslope@gmail.com" className="hover:underline">theempresslope@gmail.com</a>
          </p>
          <p className="text-gray-600">
            We aim to respond to all messages within 24-48 business hours.
          </p>
          <button
            onClick={() => setCurrentPage('home')}
            className="mt-8 flex items-center justify-center mx-auto text-purple-600 hover:text-purple-800 transition-colors duration-200 font-semibold"
          >
            <ChevronLeft size={20} className="mr-2" /> Back to Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      {/* Header */}
      <DesktopNav />
      <MobileNav />
      <MobilePageNavigation />

      {/* Main Content Area */}
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'consultation' && <ConsultationPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'blog' && <BlogPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'contact' && <ContactPage setCurrentPage={setCurrentPage} />} {/* Render ContactPage */}
    </div>
  );
};

export default App;
