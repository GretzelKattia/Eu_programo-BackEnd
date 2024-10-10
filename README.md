# Curso: Eu Programo - Minha Primeira API com Node.js 👩🏽‍💻💜

<div align="center">
  <pre><i>🚧 Espera um minutinho, essa parte ainda está sendo feita! (Juro que dessa vez vai ser rápido) 🚧</i></pre>
</div>

Bem-vindos ao meu repositório do curso "BACK-END | MINHA PRIMEIRA API" oferecido pelo Eu Programo! Estou fazendo esse curso da minha primeira API utilizando Node.js, com uma abordagem prática para me familiarizar ainda mais com o "trabalhos das sombras" tão essenciais para os dias atuais. E tudo isso acompanhado da maravilhosa instrutora Simara Conceição, que está pegando a minha mãozinha e me guiando por esse novo caminho repleto de coisas que desconheço, mas quero aprender!

## *➖➖➖➖➖➖➖➖➖➖   Módulos do Curso   ➖➖➖➖➖➖➖➖➖➖*

## 🚂 Módulo 1: Todas a bordo! 
Nesse primeiro módulo, tivemos uma introdução para que todas as participantes pudessem se conectar, fazer networking e assistir a vários vídeos inspiradores do TED. Esses vídeos destacaram a importância de não nos menosprezarmos e de superar aquela voz interior que diz: "Eu não sou ______ o suficiente."

Aqui aprendemos que sim, somos suficientes. Entendemos que vulnerabilidades não precisam ser escondidas a todo custo. Pelo contrário, ao admitir nossas fraquezas, encontramos apoio e coragem. É fundamental adotar uma mentalidade de crescimento, sempre pensando: "Eu ainda não achei o erro!" e nunca "Eu sou um erro."

Xô xô, Síndrome de Impostora!

(
Se por acaso quiser ver mais obre os vídeos apresentado, adicionarei o link logo a seguir: 
- [O poder da vulnerabilidade. | Brene Brown
](https://youtu.be/iCvmsMzlF7o)
- [O poder de acreditar que se pode melhorar | Carol Dweck
](https://youtu.be/_X0mgOOSpLU)
- [Ensine às meninas coragem, não perfeição | Reshma Saujani](https://youtu.be/fC9da6eqaqg)


)

#### ➡️ **Hashtag da semana:** Dessa vez não tinha hashtag 😅
#### ➡️ **Modulo Check:** ✅

## 💨 Módulo 2: Esquentando os motores!
Já neste módulo, fomos apresentados à nossa queridíssima instrutora Simara Conceição. Ela nos explicou mais sobre a nossa primeira API e os softwares necessários para dar o pontapé inicial (por exemplo, o node.js e o Visual Studio Code). Também discutimos como essa API será integrada ao front-end, garantindo uma experiência incrível para o usuário.

#### ➡️ **Hashtag da semana:** #EsquentandoOsMotoresCheck  
#### ➡️ **Modulo Check:** ✅

## 🌐 Módulo 3: Criando meu primeiro servidor
Neste módulo, entramos com tudo! Começamos a criar nosso primeiro servidor, usando a super flexível linguagem de programação JavaScript. Definimos um caminho no localhost com a porta 3333. Olha o código abaixo:


```js
const express = require('express')

const app = express()
const porta = 3333

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)
```
Vamos decifrar esse código:

- Na primeira linha, falamos para o computador ir até o pacote do Express e guardar todos os poderes do servidor na constante express.

- Em seguida, chamamos a função express para criar uma aplicação e guardamos na constante `app`.

- Depois, definimos o número da porta e a função `mostraPorta`.

- E, por fim, dizemos ao computador para fazer o app escutar (ou seja, chamar a função `listen`), informando o endereço da porta e o identificador da função `mostraPorta`. Sem parênteses aqui, porque quem chama a função é o servidor quando estiver funcionando.

Mas, ao acessarmos essa porta no navegador, aparece a mensagem `Cannot GET /`. Isso acontece porque o servidor ainda não sabe o que mostrar quando o endereço é acessado! 
(veremos mais sobre isso no próximo módulo)

Além de tudo isso, conseguimos entender melhor conceitos importantes para o trabalho tech do dia a dia: **Pensamento Computacional**. Mas, afinal, o que é pensamento computacional?


O pensamento computacional é um conjunto de conceitos que pode nos ajudar a desenvolver um pensamento lógico (nossa forma de pensar para resolver problemas). Ele é composto por quatro pilares super importantes:

![image](https://github.com/user-attachments/assets/e8e0fd16-1fd2-4cd0-a0cb-ec63937a2183)  
*Então, basicamente, entender que esse passo super importante de pegar grandes problemas e ser capaz de dividi-los em etapas menores, nomear conceitos, identificar padrões e criar um passo a passo, permite avançarmos muito mais rápido.*  
<br>
<br>
![image](https://github.com/user-attachments/assets/4217a32b-ca87-4d64-84e0-106042c193a2)  
*Entender o que é algoritmo, conforme essa pequena citação do livro: "Algoritmos para viver, a ciência exata das decisões humanas."*  
<br>
<br>
![image](https://github.com/user-attachments/assets/404a4e48-5e66-45d5-9ea8-d092c4836ddc)  
*Sempre pensamos no que daremos de entrada, como as informações serão processadas e o que teremos de saída.*  

#### ➡️ **Hashtag da semana:** #MeuPrimeiroServidorCheck  
#### ➡️ **Módulo Check:** ✅


## 🗄️ Módulo 4: Rodando o servidor local

#### ➡️ **Hashtag da semana:** #RodandoServidorLocalCheck  
#### ➡️ **Módulo Check:** ✅
<!-- 🗄️🖥🖧 
## Módulo 5: Fazendo o Deploy

## Módulo 6: Conhecendo outros métodos HTTP

## Módulo 7: Explorando Base de Dados

## Módulo 8: Salvando uma nova mulher no banco de dados

## 🚀 Módulo 9: Decolando o seu projeto 

### Módulo 10: Para ir além

## Conclusão 
Espero que este curso -->


