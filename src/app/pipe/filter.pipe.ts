import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * A kapott tömb szűrése a szűrőkifejezés alapján.
   * @param value {any[]} - a szűrendő tömb
   * @param phrase {string} - a szűrőkifejezés
   * @param key {string} - az objektumkulcs, amely alapján szűr
   * @returns {any[]} - a kifejezés alapján szűrt tömb
   */
  transform(value: any[], phrase: string, key: string = ''): any {
    // A KÖVETKEZŐ SORT TÁVOLÍTSD EL!!!
    //return value;

    /**
     * FELADAT!
     * Ellenőrzés: ha a value nem tömb, vagy nincs megadva a phrase vagy a key,
     * térj vissza a value változóval.
     */
    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    }


    /**
     * FELADAT!
     * Térj vissza a value.filter metódus eredményével (a value mindig tömb).
     * 1. Alakítsd az item[key] értékét string típusúra.
     * 2. A visszatérési érték true, ha valahol szerepel benne a phrase.
     * TIPP: az összehasonlítás előtt a két értéket alakítsd kisbetűsre.
     */

    return value.filter(item => 
      String(item[key]).toLowerCase().includes(phrase.toLowerCase())
    );
  }

}
