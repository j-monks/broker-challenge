import * as PolicyService from '../services/policyService.js';

// Handling the file upload and parsing
const uploadCSV = async (req, res) => {
  try {
    const { file } = req;

    // Parsing logic using service
    const parsedData = await PolicyService.parseAndSaveCSV(file);

    // Send the parsed data as a response
    res.json({ parsedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch all policies from the database
const getAllPolicies = async (req, res) => {
  try {
    const policies = await PolicyService.getAllPolicies();

    // Send the policies as a JSON response
    res.json(policies);
  } catch (error) {
    console.error('Error fetching policies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default { uploadCSV, getAllPolicies };
