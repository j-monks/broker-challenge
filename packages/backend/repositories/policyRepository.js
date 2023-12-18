import db from '../models/index.js';

export async function savePolicies(policies) {
  try {
    await db.models.Policy.bulkCreate(policies, { individualHooks: true });
    return 'Policies saved successfully!';
  } catch (error) {
    throw new Error(`Error saving policies: ${error.message}`);
  }
};

export async function retrieveAllPolicies() {
  try {
    const policies = await db.models.Policy.findAll();
     // Convert to JSON
    const policiesJSON = policies.map(policy => policy.toJSON());

    return policiesJSON;
  } catch (error) {
    throw new Error('Error fetching policies');
  }
};