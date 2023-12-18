import { savePolicies, retrieveAllPolicies } from '../repositories/policyRepository.js';
import { parseCSV } from '../utils/csvParser.js';

export async function parseAndSaveCSV(file) {
  const parsedData = await parseCSV(file);
  try {
    const result = await savePolicies(parsedData);
    return result;
  } catch (error) {
    throw new Error(`Error parsing and saving data: ${error.message}`);
  }
};

export async function getAllPolicies() {
  try {
    const policies = await retrieveAllPolicies();
    return policies;
  } catch (error) {
    throw new Error('Error fetching policies');
  }
};
