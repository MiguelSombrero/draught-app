import AlcoholCalculator from "./alcoholCalculator";

class DraughtsReducer {  
  static AlcoholCalculator = new AlcoholCalculator();
  
  reduceByDate(draught) {
    return Object.values(
      draught.reduce(this.dateReducer, {})
    );
  }

  dateReducer(accumulation, draught) {
    const created = draught.createdAt.substring(0, 10);

    const newUnits = AlcoholCalculator.alcoholUnits(draught);

    accumulation[created] = accumulation[created]
      ? { date: created, units: accumulation[created].units + newUnits }
      : { date: created, units: newUnits };

    return accumulation;
  }

}

export default DraughtsReducer;