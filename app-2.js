class Dog {
     
  }
  
  class GuideDog extends Dog {
    #isTrained;  
    constructor() {
      super();
      this.#isTrained = true;  
    }
    leadBlind() {
      return "Following the guide dog";
    }
  }

  const trainedDog = new GuideDog();
  console.log(trainedDog.leadBlind());