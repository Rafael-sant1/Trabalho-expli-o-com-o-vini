import React from "react";
import './Cartao.css';

function Cartao(){
    return(
        <>
            <header> <h1>Ataques de Força Bruta: Como se Proteger</h1></header>
            <h2>O que é um Ataque de Força Bruta?</h2>
    <p>Um ataque de força bruta ocorre quando um invasor tenta adivinhar sua senha fazendo várias tentativas até encontrar a correta. Eles usam ferramentas automatizadas que testam uma grande quantidade de combinações rapidamente.</p>

    <h2>Como Funciona?</h2>
    <p>O atacante tenta todas as combinações possíveis de senha até acertar. Se a sua senha for simples, como "123456", ela pode ser descoberta muito rapidamente.</p>

    <h2>Como se Proteger?</h2>
    <ul>
      <li><strong>Use Senhas Fortes e Complexas</strong>: Evite senhas óbvias e combine diferentes tipos de caracteres.</li>
      <li><strong>Habilite a Autenticação de Dois Fatores (2FA)</strong>: Isso adiciona uma camada extra de segurança.</li>
      <li><strong>Não Reutilize Senhas</strong>: Use senhas únicas para cada conta.</li>
      <li><strong>Limite as Tentativas de Login</strong>: As plataformas devem permitir bloqueio após várias tentativas falhadas.</li>
    </ul>
    <h3>Dica Extra:</h3>
      <p>Use um gerenciador de senhas para criar e armazenar senhas complexas de forma segura.</p>
      <h2>Sinais de Ataques</h2>
    <ul>
      <li>Alertas de tentativas de login de dispositivos desconhecidos.</li>
      <li>Bloqueio temporário da conta após múltiplas tentativas falhadas.</li>
    </ul>
    <h2>O que Fazer se For Vítima?</h2>
    <ul>
      <li>Alterar sua senha imediatamente.</li>
      <li>Ativar a autenticação de dois fatores (2FA) em todas as suas contas.</li>
      <li>Notificar o suporte das plataformas afetadas.</li>
    </ul>
        </>
    )

};
export default Cartao;  