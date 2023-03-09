import { sendRequest } from "./send-request";

const BASE_URL = "/api/emails";

export function getAll() {
  return sendRequest(BASE_URL);
}

