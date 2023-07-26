interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Team Member'],
  customerRoles: ['Guest User'],
  tenantRoles: ['Team Member'],
  tenantName: 'Organization',
  applicationName: 'conferencia de documentos',
  addOns: ['file', 'chat'],
};
