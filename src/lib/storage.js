const STORAGE_KEY = 'gana_user_platform_v1';

const DEFAULT_DATA = {
  users: [],
  policies: [],
  claims: [],
  callRequests: [],
  session: {
    currentUserId: null,
  },
};

export function createId(prefix = 'id') {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function normalizeData(input) {
  return {
    users: Array.isArray(input?.users) ? input.users : [],
    policies: Array.isArray(input?.policies) ? input.policies : [],
    claims: Array.isArray(input?.claims) ? input.claims : [],
    callRequests: Array.isArray(input?.callRequests) ? input.callRequests : [],
    session: {
      currentUserId: input?.session?.currentUserId ?? null,
    },
  };
}

export function loadAppData() {
  if (typeof window === 'undefined') return DEFAULT_DATA;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT_DATA;

  try {
    const parsed = JSON.parse(raw);
    return normalizeData(parsed);
  } catch {
    return DEFAULT_DATA;
  }
}

export function saveAppData(data) {
  if (typeof window === 'undefined') return;
  const normalized = normalizeData(data);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
}
