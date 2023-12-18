import db from '../models/index.js';

export async function savePolicies(policies) {
  try {
    await db.models.Policy.bulkCreate(policies, { individualHooks: true });
    return 'Policies saved successfully!';
  } catch (error) {
    throw new Error(`Error saving policies: ${error.message}`);
  }
};
