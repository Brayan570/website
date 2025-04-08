function showRegisterForm() {
  formWrapper.innerHTML = `
      <i class="fas fa-user-plus"></i>
      <h2>Crear cuenta</h2>
      <input
        name="name"
        type="text"
        placeholder="Nombre completo"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        required
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirmar contraseña"
        required
      />
      <button type="button" onclick="validateRegister()">Registrarse</button>
      <a href="#" onclick="showLoginForm()">¿Ya tienes cuenta? Inicia sesión</a>
    `;
}
