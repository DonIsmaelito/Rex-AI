export const REXY_ASSIST_STORAGE_KEY = 'rexy_policy_assist_v1';
export const WORKFLOW_STORAGE_PREFIX = 'gana_ai_coverage_flow_v2';

export function getWorkflowStorageKey(userId) {
  return `${WORKFLOW_STORAGE_PREFIX}_${userId || 'guest'}`;
}

export function loadFromStorage(key, fallback) {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function saveToStorage(key, value) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

