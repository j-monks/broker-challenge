<template>
    <v-container class="table-container">
      <h2 class="mb-2">POLICIES</h2>
      <vue-good-table
        :columns="columns"
        :rows="policies"
        :searchOptions="searchOptions"
        :paginationOptions="paginationOptions"
        :max-height="tableMaxHeight"
        :fixed-header="false"
        :line-numbers="true"
        class="table"
        style="overflow-x: auto; max-width: 100%;"
      ></vue-good-table>
    </v-container>
  </template>
    
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    name: "PolicyTable",
    data() {
      return {
        searchOptions: {
          enabled: true,
          placeholder: "Search policies",
        },
        paginationOptions: {
          enabled: true,
          mode: "records",
          perPage: 10,
        },
      };
    },
    computed: {
      ...mapGetters('policies', ['policies']),
      tableMaxHeight() {
        // Work required height to fit view
        const windowHeight = window.innerHeight;
        const maxHeight = windowHeight - 265;
        return `${maxHeight}px`;
      },
      columns() {
        return [
          { label: "Policy Number", field: "policyNumber", stickyColumn: true },
          {
            label: "Insured Amount",
            field: "insuredAmount",
            formatFn: this.formatCurrency,
          },
          { label: "Start Date", field: "startDate" },
          { label: "End Date", field: "endDate" },
          { label: "Admin Fee", field: "adminFee", formatFn: this.formatCurrency },
          { label: "Business Description", field: "businessDescription" },
          { label: "Business Event", field: "businessEvent" },
          { label: "Client Type", field: "clientType" },
          { label: "Client Ref", field: "clientRef" },
          {
            label: "Commission",
            field: "commission",
            formatFn: this.formatPercentage,
          },
          { label: "Effective Date", field: "effectiveDate" },
          { label: "Insurer Policy Number", field: "insurerPolicyNumber" },
          {
            label: "IPT Amount",
            field: "iptAmount",
            formatFn: this.formatCurrency,
          },
          { label: "Premium", field: "premium", formatFn: this.formatCurrency },
          {
            label: "Policy Fee",
            field: "policyFee",
            formatFn: this.formatCurrency,
          },
          { label: "Policy Type", field: "policyType" },
          { label: "Insurer", field: "insurer" },
          { label: "Product", field: "product" },
          { label: "Renewal Date", field: "renewalDate" },
          { label: "Root Policy Ref", field: "rootPolicyRef" },
        ].map((column) => {
          // Map over columns and add column filter options and items for all
          return {
            ...column,
            filterOptions: {
              styleClass: "class1",
              enabled: true,
              filterDropdownItems: this.getUniqueColumnValues(column.field),
            },
          };
        });
      },
    },
    methods: {
      ...mapActions('policies', ['fetchPolicies']),
      getUniqueColumnValues(columnName) {
        // Pull out unique policy values for column dropdown filters
        const uniqueValues = new Set(
          this.policies.map((policy) => policy[columnName])
        );
        return [...uniqueValues];
      },
      formatCurrency(value) {
        // Ensure value is a number and format to pounds
        if (!isNaN(value)) {
          return Number(value).toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          });
        }
      },
      formatPercentage(value) {
        return value + "%";
      },
    },
    mounted() {
      // Fetch policies via store on mount
      this.fetchPolicies();
    }
  };
  </script>
    
  <style>
  /** 
    Found this solution online to fix the vue-good-table fixed-headers issue: https://github.com/xaksis/vue-good-table/issues/373#issuecomment-1464514347
  */
  /** 
    Applying `border-collapse: separate` on the table container prevents the first 
    table header row's border from being applied elsewhere when it is sticky.
  */
  .vgt-table {
    border-collapse: separate !important;
    border-spacing: 0;
    border-top: 0 !important;
  }
  
  /**
      Applying `position: sticky` here to make it sticky.
  */
  .vgt-table thead {
    position: sticky;
    top: 0
  }
  
  /**
      We removed the top border from .vgt-table to apply it here instead
  */
  .vgt-table thead tr:first-child th {
    border-top: 1px solid #dcdfe6 !important
  }
  
  /**
      Applying `border-collapse: separate` doubled the cell border width visually.
      Setting this to a fractional value fixed the issue.
  */
  .vgt-table th, .vgt-table td {
    border-width: .5px !important
  }
  

 /**
      Additional table styling
  */
  .table .vgt-table tbody tr td {
    font-size: 14px;
  }
  .table .vgt-center-align {
      text-align: left;
      margin-left: 35px;
  }
  .table .vgt-table th {
    font-size: 14px;
    white-space: nowrap
  }
  .table .vgt-pagination-row {
    height: 10px;
  }
  </style>
  