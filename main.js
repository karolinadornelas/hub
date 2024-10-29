const projects = [
  {
    title: "mhtu!",
    description:
      "A página foi feita para customização de pedidos para um ateliê. O usuário pode escolher a base da pelúcia, a cor, as vestimentas e outros acessórios, se desejar. Ao finalizar, é gerado um pdf com as informações do pedido e informações de envio. são Habilidades: manipulação do DOM; requisição de API, responsividade.",
    techStack: ["javascript"],
    repoUrl: "https://github.com/karolinadornelas/mhtu-repo",
    deployUrl: "https://mhtu-custom.vercel.app/",
    imageUrl: "./assets/projetos/p-mhtuc.jpg",
  },
  {
    title: "ramengo!",
    description:
      "RamenGo é uma plataforma que permite que o usuário monte um pedido de ramen, escolhendo os tipos de mantimentos e proteínas do prato, consumindo duas listagens de condimentos da API disponibilizada pela RedVentures. Habilidades: requisição e manipulação de dados; responsividade.",
    techStack: ["javascript"],
    repoUrl: "https://github.com/karolinadornelas/RamenGo",
    deployUrl: "https://ramen-go-omega.vercel.app/",
    imageUrl: "./assets/projetos/p-ramen-go.png",
  },
  {
    title: "similaridade textual",
    type: "freelance",
    description:
      "Esta aplicação permite comparar textos, verificar a taxa de reprodução textual e gerar um arquivo PDF com as evidências encontradas. Foi desenvolvida para auxiliar o trabalho manual do profissional avaliador de promoções da SECPROM. O projeto foi apresentado ao corpo de TI da FAB para aprimoramentos e está em uso pelos agentes.",
    techStack: ["vite", "javascript", "less"],
    repoUrl: "https://github.com/karolinadornelas/similaridade-textual",
    deployUrl: "https://secprom-reproducao-textual.vercel.app/",
    imageUrl: "assets/projetos/p-similaridade.png",
  },
  {
    title: "pumpkin shop",
    description:
      "Este projeto faz parte de uma iniciativa pessoal de transformar flyers em websites interativos para praticar minhas habilidades de reprodução de designs com css. Este em específico é um modelo baseado no design do artista @kusa_8 e representa uma loja fictícia de sopas com cadastro de clientes.",
    techStack: ["vite", "javascript", "less", "gulp"],
    repoUrl: "https://github.com/karolinadornelas/pumpkin-shop",
    deployUrl: "https://miauleria.vercel.app/",
    imageUrl: "assets/projetos/p-pumpkin.png",
  },
  {
    title: "miauleria",
    description:
      "Esta aplicação faz parte das entregas de atividades do curso de desenvolvimento da EBAC. Foi criada para evoluir meus estudos de javascript, estilização com sass e automatização de tarefas com o gulp.",
    techStack: ["javascript", "sass", "gulp"],
    repoUrl: "https://github.com/karolinadornelas/icon-generator",
    deployUrl: "https://miauleria.vercel.app/",
    imageUrl: "assets/projetos/p-miauleria.png",
  },
  {
    title: "anime quiz",
    description:
      "Esta é um jogo simples de adivinhação dentro do tema.",
    techStack: ["javascript"],
    repoUrl: "https://github.com/karolinadornelas/anime-quiz",
    deployUrl: "https://anime-quiz-rosy.vercel.app/",
    imageUrl: "assets/projetos/p-quiz.png",
  },
  {
    title: "animefy",
    description:
      "Este projeto faz parte das entregas dentro do curso de desenvolvimento fullstack da EBAC, módulo Bootstrap. O Animefy Streaming é uma aplicação fictícia que simula uma plataforma de transmissão de anime, inspirada na fusão entre os estilos visuais do Crunchyroll e do Spotify.",
    techStack: ["bootstrap"],
    repoUrl: "https://github.com/karolinadornelas/tarefa-streaming",
    deployUrl: "https://tarefa-streaming-amfy.vercel.app/",
    imageUrl: "assets/projetos/p-animefy.png",
  },
];

const projectHallBundle = document.getElementById("project-hall-bundle");

document.addEventListener("DOMContentLoaded", function () {
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    const freelance = project.title === "similaridade textual";

    projectCard.innerHTML = `
        <div class="project-bundle">
            <div class="project-details">
                <div class="project-type">
                    <h2>${project.title}</h2>
                    ${freelance ? '<h5 class="tag">freelance</h5>' : ""}
                </div>
                
                <p>${project.description}</p>
                <div id="bundle-tech">
                    <div class="title-ex">
                        <div class="experience-title">
                            <h5><i class="fa-solid fa-code"></i></h5>
                            <h5>Tecnologias</h5>
                        </div>
                        <div class="btn-title-ex">
                            ${project.techStack
                              .map((tech) => `<h5>${tech}</h5>`)
                              .join("")}
                        </div>
                    </div>
  
                    <div class="title-ex">
                        <div class="experience-title">
                            <h5><i class="fa-solid fa-desktop"></i></h5>
                            <h5>Visualização</h5>
                        </div>
                        <div class="btn-title-ex">
                            <h5>
                                <a href="${project.repoUrl}" target="_blank">repositório</a>
                            </h5>
                            <h5>
                                <a href="${project.deployUrl}" target="_blank">Deploy</a>
                            </h5>
                        </div>
                    </div>
                </div>
  
                <div class="project-overlook">
                    <img src="${project.imageUrl}" alt="${project.title}">
                </div>
            </div>
        </div>
      `;

    projectHallBundle.appendChild(projectCard);
  });
});
