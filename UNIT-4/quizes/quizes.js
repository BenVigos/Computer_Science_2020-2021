// Quiz 27
function abundant(a, b) {
    abund = 0;

    for (let i = a; i <= b; i++) {
        sum_divisors = 0;

        for (let j = 1; j < i; j++) {
            if (i%j == 0) {
                sum_divisors += j
            }
        }
        if (sum_divisors > i) {
            abund += 1
        }
    }
    return abund
}






// Quiz 29

// https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function test_leds(n_leds, n_strips, pass_fail){
pass_fail_len = n_strips;
out = "";

for (x=0; x<n_leds; x++){
    out += "?"
}

    for (let i=0; i< pass_fail.length; i++) {
        part = pass_fail[i];
        start = parseInt(part[0])
        end = parseInt(part[2])

        for (let j = start; j <= end; j++) {

            if (part.indexOf("PASS") !== -1) {
                out = out.replaceAt(j, "V");
            }

            else if (part.indexOf("FAIL") !== -1) {
                out  = out.replaceAt(j, "X")
            }
        }
    }
return out
}






// Quiz 31

function voting(votes) {
    let tally = [];
    let results = "";

    for(let i=0; i < votes.length; i++) {
        vote = last_word(votes[i]);
        // console.log(i);
        // console.log(vote)
        // console.log(tally)

        if(tally.indexOf(vote) == -1) {
            tally.push(vote);
            tally.push(1);
        }

        else {
            tally[tally.indexOf(vote)+1]+=1
        }
    }


    // https://www.w3schools.com/jsref/jsref_isinteger.asp#:~:text=isInteger()%20method%20determines%20whether,Otherwise%20it%20returns%20false.
    let max = 0;
    for(let j=0; j < tally.length; j++) {

        if(Number.isInteger(tally[j])) {

            if(tally[j] > max) {
                max = tally[j];
            }
            else if(tally[j] == max) {
                return "No one was ejected (draw)"
            }
        }
    }

    if(tally[tally.indexOf(max)-1] == "voting") {
        return "No one was ejected (skipped)"
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    else    {
        return tally[tally.indexOf(max)-1] + " was ejected"
    }

}

// https://stackoverflow.com/questions/20883404/javascript-returning-the-last-word-in-a-string
function last_word(words) {
    var n = words.split(" ");
    return n[n.length - 1];

}






// Quiz 34

// I have one way roads and I need to find how many cities I can reach from the first city
//
// I plan to use a for loop that starts from the last city and traces the route back to the first city,
// if it can, that city and all the ones leading up to it are succesfull.
// if not, that city and all the ones leading up to it are failed.


function initialize_cities(inp){
    let can_cant = [];
    for (let i=0; i < inp.length; i++) {
        can_cant.push(0)
    }
    return can_cant
}


function failed(can_cant) {
    for (let i=0; i < can_cant.length; i++) {
        if (can_cant[i] == -2) {
            can_cant[i] = -1
        }
    }
    return can_cant
}



function succeeded(can_cant) {
    // console.log(can_cant)

    for (let i=0; i < can_cant.length; i++) {

        if (can_cant[i] == -2) {
            can_cant[i] = 1
        }
    }
    return can_cant
}



function find_cities(input_vals) {
    let can_cant = initialize_cities(input_vals);

    for (let i=input_vals.length-1; i >= 0; i--) {
        // console.log("test:", can_cant)

        if (input_vals[i] == -1) {
            can_cant[i] = -1;
        }
        else if (can_cant[i] != -1 && can_cant[i] != 1) {
            // console.log(can_cant)
            let go = i;
            let prev = -1;

            while (go >= 0) {
                // console.log("city:", i, "go:", go)
                if (go == 0){
                    can_cant = succeeded(can_cant);
                    // console.log("success")
                    go = -1;
                }

                else {
                    can_cant[go] = -2
                    go = input_vals[go];

                    if (prev == go) {
                        can_cant = failed(can_cant);
                        // console.log("failed")
                    }

                    prev = go;
                }

            }
        }

    }
    let reached = 0;

    for (let n = 0; n < can_cant.length; n++) {
        if (can_cant[n] == 1) {
            reached += 1
        }
    }
    console.log("can_cant", can_cant)
    return reached
}






//Quiz 36

function sort_nums(inp_vals) {
    for (let i=0; i < inp_vals.length; i++) {
        for (let j=i; j<inp_vals.length; j++) {

            if (inp_vals[j] <= inp_vals[i]) {
                temp = inp_vals[j]
                inp_vals[j] = inp_vals[i]
                inp_vals[i] = temp
            }
        }
    }
    return inp_vals
}



function bbox_36(inp_vals) {
    inp_vals = sort_nums(inp_vals)

    if (inp_vals.length % 2 == 0) {
        return Math.floor((inp_vals[inp_vals.length/2] + inp_vals[(inp_vals.length/2)-1])/2)
    }
    else {
        return inp_vals[Math.floor(inp_vals.length/2)]
    }
}






// Quiz 37

function hills(inp) {
    max = 0
    for (let i = 0; i < inp.length-1; i++) {
        height_dif = parseInt(inp[i+1]) - parseInt(inp[i])

        if (Math.abs(height_dif) > Math.abs(max)) {
            max = height_dif
        }
    }
    return max
}






// Quiz 38

function data_size(inp) {
    bytes = 0;
    max_size = Math.max.apply(0, inp)

    packs = 1;

    prev = 0;

    size = 0;

    for (let i = 0; i < inp.length; i++) {
        size += prev;

        prev = inp[i];

        if (size + prev > max_size ) {
            packs += 1;
            size = 0;
        }


    }
    bytes = packs * max_size;

    return bytes
}






// Quiz 39

function narcissistic(m, n) {
    narcs = []

    for (let i = m+1; i<n; i++) {
        num_str = i.toString();
        pow = num_str.length;
        sum = 0;

        for (let j=0; j < pow; j++) {
            dig = parseInt(num_str[j])
            sum += dig ** pow
        }

        if (sum == i) {
            narcs.push(i)
        }
    }
    return "there are " + narcs.length + " narcissistic numbers and they are: " + narcs
}





// Quiz 40

function matches(l, s) {
    s = s/20

    n_matches = Math.ceil(l/s)
    return n_matches
}



