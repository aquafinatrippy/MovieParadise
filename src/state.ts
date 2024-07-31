import { assign, createActor, fromPromise, setup } from "xstate";

const getMovies = async () => {
  try {
    const data = await fetch(
      "https://imdb-movies-web-series-etc-search.p.rapidapi.com",
      {
        method: 'GET',
        headers: {
          "x-rapidapi-key":
            "env key",
        },
      }
    );
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};

export const MovieMachine = setup({
  types: {
    context: {} as {
      name: string;
      data: {
        greeting: string;
      } | null;
    },
  },
    actors: {
      fetchData: fromPromise(({ input }: { input: { name: string } }) =>
        getMovies()
      )
    }
}).createMachine({
  initial: "idle",
  context: {
    name: "World",
    data: null,
  },
  id: "tt",
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {
        invoke: {
          src: 'fetchData',
          input: ({ context }) => ({ }),
          onDone: {
            target: 'success',
            actions: assign({
            //   data: ({ event }) => event.output
            })
          },
          onError: 'failure'
        }
    },
    success: {},
    failure: {
      after: {
        1000: "loading",
      },
      on: {
        RETRY: "loading",
      },
    },
  },
});

export const MovieMachineActor = createActor(MovieMachine);
