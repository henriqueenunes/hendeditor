import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configurações do e-mail
remetente = "seuemail@gmail.com"
senha = "sua-senha-ou-senha-de-app"
destinatario = "destino@gmail.com"

# Criando o e-mail
mensagem = MIMEMultipart()
mensagem["From"] = remetente
mensagem["To"] = destinatario
mensagem["Subject"] = "Formulário recebido"

corpo = "Nome: Fulano\nEmail: fulano@email.com"
mensagem.attach(MIMEText(corpo, "plain"))

# Enviando o e-mail
try:
    servidor = smtplib.SMTP("smtp.gmail.com", 587)
    servidor.starttls()
    servidor.login(remetente, senha)
    servidor.sendmail(remetente, destinatario, mensagem.as_string())
    servidor.quit()
    print("E-mail enviado com sucesso!")
except Exception as e:
    print("Erro ao enviar e-mail:", e)
