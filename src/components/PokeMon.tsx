import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { INSERT_IMAGE_COMMAND } from "../plugins/PokeMonPlugin";
import Pokemon from "../interfaces/PokeMoneInterface";
import { useEffect, useState } from "react";
import { fetchPokemon } from "../services/pokemonService";

export default function PokeMon(): JSX.Element {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [editor] = useLexicalComposerContext();


  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchPokemon();
      setPokemonList(data);
    };

    getPokemon();
  }, []);

  const onClick = (payload: Pokemon) => {
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, {src:payload.sprite, altText: payload.name, maxWidth:70});
  };

  return (
    <div className="PokeMonList">
      {pokemonList?.map((pokemon: any) => (
        <button className="button" key={pokemon.name} onClick={() => onClick(pokemon)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
