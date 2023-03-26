export async function getAllExpressions(search) {
    const response = await fetch('/api/expressions/?q='+search);
    return await response.json();
}

export async function createExpression(data) {
    const response = await fetch(`/api/expression`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}