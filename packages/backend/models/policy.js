import moment from 'moment';
/**
 * Sequelize Model for Policy
 * 
 * Note: Virtual fields defined here are not stored in the database.
 * Instead, they're used to normalise and aggregate data, mapping to actual DB fields.
 */
export default (sequelize, DataTypes) => {
  const Policy = sequelize.define('policy', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    policyNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    policyRef: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('policyNumber', value);
      },
    },
    insuredAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    coverageAmount: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('insuredAmount', value);
      },
    },
    startDate: {
      type: DataTypes.DATEONLY,
      set: function(value) {
        if (moment(value, 'DD/MM/YYYY', true).isValid()) {
          this.setDataValue('startDate', moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        } else {
          this.setDataValue('startDate', '1000-01-01');
        }
      },
      get: function() {
        const dateValue = this.getDataValue('startDate');
        if (moment(dateValue, 'YYYY-MM-DD', true).isValid()) {
          return moment(dateValue).format('DD-MM-YYYY');
        } else {
          return '01-01-1000';
        }
      }
    },
    initiationDate: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        if (moment(value, 'DD/MM/YYYY', true).isValid()) {
          this.setDataValue('startDate', moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        } else {
          this.setDataValue('startDate', '1000-01-01');
        }
      }
    },
    endDate: {
      type: DataTypes.DATEONLY,
      set: function(value) {
        if (moment(value, 'DD/MM/YYYY', true).isValid()) {
          this.setDataValue('endDate', moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        } else {
          this.setDataValue('endDate', '1000-01-01');
        }
      },
      get: function() {
        const dateValue = this.getDataValue('endDate');
        if (moment(dateValue, 'YYYY-MM-DD', true).isValid()) {
          return moment(dateValue).format('DD-MM-YYYY');
        } else {
          return '01-01-1000';
        }
      }
    },
    expirationDate: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        if (moment(value, 'DD/MM/YYYY', true).isValid()) {
          this.setDataValue('endDate', moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        } else {
          this.setDataValue('endDate', '1000-01-01');
        }
      }
    },
    adminFee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    adminCharges: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('adminFee', value);
      },
    },
    businessDescription: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    companyDescription: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('businessDescription', value);
      },
    },
    businessEvent: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    contractEvent: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('businessEvent', value);
      },
    },
    clientType: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    consumerCategory: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('clientType', value);
      },
    },
    clientRef: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    consumerId: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('clientRef', value);
      },
    },
    commission: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    brokerFee: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('commission', value);
      },
    },
    effectiveDate: {
      type: DataTypes.DATEONLY,
      set: function(value) {
        if (moment(value, 'DD/MM/YYYY', true).isValid()) {
          this.setDataValue('effectiveDate', moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        } else {
          this.setDataValue('effectiveDate', '1000-01-01');
        }
      },
      get: function() {
        const dateValue = this.getDataValue('effectiveDate');
        if (moment(dateValue, 'YYYY-MM-DD', true).isValid()) {
          return moment(dateValue).format('DD-MM-YYYY');
        } else {
          return '01-01-1000';
        }
      }
    },
    activationDate: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function(value) {
        if (moment(value, 'DD/MM/YYYY', true).isValid()) {
          this.setDataValue('effectiveDate', moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        } else {
          this.setDataValue('effectiveDate', '1000-01-01');
        }
      },
      get: function() {
        const dateValue = this.getDataValue('effectiveDate');
        if (moment(dateValue, 'YYYY-MM-DD', true).isValid()) {
          return moment(dateValue).format('YYYY-MM-DD');
        } else {
          return '1000-01-01';
        }
      }
    },
    insurerPolicyNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    insuranceCompanyRef: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('insurerPolicyNumber', value);
      },
    },
    iptAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    taxAmount: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('iptAmount', value);
      },
    },
    premium: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      set: function(value) {
        if (!isNaN(value)) {
          this.setDataValue('premium', parseFloat(value));
        } else {
          this.setDataValue('premium', null);
        }
      },
      get: function() {
        return this.getDataValue('premium');
      }
    },
    coverageCost: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function(value) {
        if (!isNaN(value)) {
          this.setDataValue('premium', parseFloat(value));
        } else {
          this.setDataValue('premium', null);
        }
      },
      get: function() {
        return this.getDataValue('premium');
      },
    },
    policyFee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    contractFee: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('policyFee', value);
      },
    },
    policyType: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    contractCategory: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('policyType', value);
      },
    },
    insurer: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    underwriter: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('insurer', value);
      },
    },
    product: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    insurancePlan: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('product', value);
      },
    },
    renewalDate: {
      type: DataTypes.DATEONLY,
      set: function(value) {
        if (moment(value, 'DD/MM/YYYY', true).isValid()) {
          this.setDataValue('renewalDate', moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        } else {
          this.setDataValue('renewalDate', '1000-01-01');
        }
      },
      get: function() {
        const dateValue = this.getDataValue('renewalDate');
        if (moment(dateValue, 'YYYY-MM-DD', true).isValid()) {
          return moment(dateValue).format('DD-MM-YYYY');
        } else {
          return '01-01-1000';
        }
      }
    },
    nextRenewalDate: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function(value) {
        if (moment(value, 'DD/MM/YYYY', true).isValid()) {
          this.setDataValue('renewalDate', moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        } else {
          this.setDataValue('renewalDate', '1000-01-01');
        }
      },
      get: function() {
        const dateValue = this.getDataValue('renewalDate');
        if (moment(dateValue, 'YYYY-MM-DD', true).isValid()) {
          return moment(dateValue).format('DD-MM-YYYY');
        } else {
          return '01-01-1000';
        }
      }
    },
    rootPolicyRef: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    primaryPolicyRef: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set: function (value) {
        this.setDataValue('rootPolicyRef', value);
      },
    }
  }, {
    timestamps: false,
    underscored: true
  });

  return Policy
};
