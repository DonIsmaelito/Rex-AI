const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.error || 'Request failed');
  }
  return payload;
}

export async function postCallRequest(payload) {
  return request('/api/rexy/calls', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

