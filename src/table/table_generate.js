import React from 'react';

export var generate = function generate_table(largeur,longueur)
{

  var table = [];
  var range_longueur = [];

  for (let index_lar = 0; index_lar < largeur; index_lar++) {
    
    range_longueur = [];

    for (let index_long = 0; index_long < longueur; index_long++) {

      range_longueur.push(<td key={"td_"+index_long+"_"+index_lar} id={"td_"+index_long+"_"+index_lar} className="cell_table_select"></td>);

    }

    table.push(<tr key={"tr_"+index_lar} id={"tr_"+index_lar} className="cell_row">{range_longueur}</tr>);
  }

  return table;

}