function validateLogin() {
  const email = document.querySelector('input[name="username"]').value.trim();
  const password = document.querySelector('input[name="password"]').value;

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo válido.");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  // Simulación de inicio de sesión exitoso
  alert("Inicio de sesión exitoso ✅");
  // Aquí podrías redirigir o enviar los datos al backend:
  // fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
}
