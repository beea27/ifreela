export interface Users {
    uid: string;
    id?: string;
    email: string;
    nome: string;
    dt_nasc: string;
    cpf: string;
    cep: string;
    cidade: string;
    uf: string;
    endereco: string;
    bairro: string;
    numero: number;
    complemento: string
    servicos: ServicoModel[];
    favoritos: ServicoModel[];
}
export interface ServicoModel {
    categoria: string;
    nome: string;
    contato: string;
    descricao: string;
    nomePrestador: string;
    like: boolean;
}