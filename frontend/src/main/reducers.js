import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: () => ({
    description: "Ler livro",
    list: [
      {
        _id: 1,
        description: "Pagar cartão",
        done: true,
      },
      {
        _id: 2,
        description: "Reunião com equipe",
        done: false,
      },
      {
        _id: 3,
        description: "Consulta médica",
        done: false,
      },
    ],
  }),
});

export default rootReducer;
