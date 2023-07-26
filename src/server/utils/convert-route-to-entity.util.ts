const mapping: Record<string, string> = {
  'access-requests': 'access_request',
  documents: 'document',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
