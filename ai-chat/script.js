body {
  font-family: 'Poppins', sans-serif;
  background: #0d0d0d;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.chat-container {
  width: 90%;
  max-width: 500px;
  background: #1a1a1a;
  border-radius: 15px;
  box-shadow: 0 0 20px #7b4eff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-box {
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  height: 400px;
}

.input-container {
  display: flex;
  padding: 10px;
  background: #111;
}

#user-input {
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  outline: none;
  background: #222;
  color: #fff;
}

#send-btn {
  padding: 10px 15px;
  background: #7b4eff;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}
