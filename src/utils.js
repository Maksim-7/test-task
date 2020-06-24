export function getData() {
  return fetch("https://5dc0838095f4b90014ddc7c3.mockapi.io/table").then(
    response => response.json()
  );
}
