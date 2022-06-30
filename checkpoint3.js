function montarAluno (nome, faltas, notas) {
    return {
        nome: nome,
        faltas: faltas,
        notas: notas,
        calcularMedia() {
            let mediaFinal = 0;
            for (let i = 0; i < notas.length; i++) {
                mediaFinal += this.notas[i]
            }
            return (mediaFinal / this.notas.length);
        },
        qFaltas() {
            this.faltas += 1;
        },
    };
}

const aluno0 = new montarAluno('Garrosh Hellscream', 10, [10, 10, 10, 10]);
const aluno1 = new montarAluno('Varyan Wrynn', 0, [10, 10, 10, 10]);
const aluno2 = new montarAluno('Illidan Stormrage', 1, [9, 5, 7, 10]);
const aluno3 = new montarAluno('Jaina Proudmore', 5, [6, 6, 10, 9]);
const aluno4 = new montarAluno('Genn Greymane', 0, [9, 8, 8, 10]);

let listaAlunos = [aluno0, aluno1, aluno2, aluno3, aluno4];

let curso = {
    nomeDoCurso: 'Mundo de guerraconstrução',
    notaDeAprovacao: 6,
    maxDeFaltas: 5,
    aluno: listaAlunos,

    adicionarAluno(nome, faltas, notas) {
        let aluno = new montarAluno(nome, faltas, notas);
        this.aluno.push(aluno);
    },

    calculoFinal(aluno) {
        let media = aluno.calcularMedia();
        let resultadoMedia;

        if (aluno.faltas < this.maxDeFaltas && media >= this.notaDeAprovacao) {
            resultadoMedia = console.log(aluno.nome + " Aprovado!");
        } else if (aluno.faltas == this.maxDeFaltas && media >= (this.notaDeAprovacao * 1.1)) {
            resultadoMedia = console.log(aluno.nome + " Aprovado por conselho!");
        } else {
            resultadoMedia = console.log(aluno.nome + " Reprovado!")
        }
        return resultadoMedia;
    },

    listaDeResultadosAlunos() {
        let resultadoFinalDoAluno = [];

        for(let i = 0; i < listaAlunos.length; i++) {
            resultadoFinalDoAluno.push(this.calculoFinal(listaAlunos[i]))
        }
        return resultadoFinalDoAluno;
    },
}

curso.adicionarAluno('Arthas Menethil', 0, [10, 10, 10, 10]);

curso.listaDeResultadosAlunos();