class Statistics {
    
    mean = () => 
        arr.reduce((acc, val) => {
        return acc + val
        },0) / arr.length
    
    
    median = () => { 
        // sort the array in ascending order
        arr.sort((a,b) => a -b)

        // find the midppoint of the array using math function
        let middleNum = Math.floor(arr.length/2);
        
        // check if the total length of numbers in the array are odd or even numbers; if odd, return the middlenumber; if even, add the two midnumbers and divide by 2 
        if ((arr.length % 2) === 1 ) {
            return arr[middleNum];
        } else {
            return ((arr[middleNum -1] + arr[middleNum]) / 2);
        }
    }

    mode = () => {
        // sort the array
        arr.sort((a, b) => a - b);

        // use linear transversal and find the most frequent
        let mostCount = 1, 
        result = arr[0];
        let currentCount = 1;
           
        for (let i = 1; i < arr.length; i++)
        {
            if (arr[i] == arr[i - 1])
                currentCount++;
            else
                currentCount = 1;
            
            if (currentCount > mostCount)
            {
                mostCount = currentCount;
                result = arr[i - 1];
            }
 
        }
         
        return result;
    }

    range = () => { 
        // Difference between the largest and smallest numbers. It is returned in this form, [smallestNum, biggestNum]
        arr.sort((a,b) => a -b);
        return [arr[0], arr[arr.length - 1]];
    };

    quartileDeviation = () => {
        // this is the difference between the 3rd quartle and the 1st quartile

        arr.sort((a, b) => a - b);
        return [arr[8] - arr[2]] /2
        
    };

    absoluteDeviation = () => {
        // solve for the sum of mean deviation about the mean using the math.abs function which returns the absolute value of a number

        let sumOfAbsoluteDeviation = 0;
        for (let i = 0; i < arr.length; i++) {
            sumOfAbsoluteDeviation = sumOfAbsoluteDeviation + Math.abs(arr[i] - this.mean(arr, arr.length));
        return sumOfAbsoluteDeviation/arr.length
        }
    };

    variance = () => {
        let newArr = arr.map((x) => {
            return (x-this.mean()) ** 2
        })
        let sumOfModifiedArray = newArr.reduce((ind, ele) => ind + ele, 0)
        return (sumOfModifiedArray/arr.length);
    }

    standardDeviation = () => {
        // returns the square root of variance
        return Math.sqrt(this.variance())
    }



    getMean() {
        console.log(`The mean of this array is ${this.mean()}`)
    }

    getMedian() {
        console.log(`The median of this array is ${this.median()}`)
    }

    getMode() {
        console.log(`The mode of this array is ${this.mode()}`)
    }

    getRange() {
        console.log(`The range of this array is ${this.range()}`)
    }
    
    getQuartileDeviation() {
        console.log(`The quartile deviation of this array is ${this.quartileDeviation()}`)
    }
    
    getAbsoluteDeviation() {
        console.log(`The absolute deviation of this array is ${this.absoluteDeviation()}`)
    }

    getVariance() {
        console.log(`The variance of this array is ${this.variance()}`)
    }

    getStandardDeviation() {
        console.log(`The standard deviation of this array is ${this.standardDeviation()}`)
    }

    
}

arr = [10, 20,30,45,45,98,100, 14, 34]


const stats = new Statistics();

stats.getMean();
stats.getMedian();
stats.getMode();
stats.getRange();
stats.getQuartileDeviation();
stats.getAbsoluteDeviation();
stats.getVariance();
stats.getStandardDeviation();