const sex = document.querySelector("#sex");
const age = document.querySelector("#age");
const face = document.querySelector("#face");
const button = document.querySelector("button");
const answer = document.querySelector("#result");


button.addEventListener("click", function() {
    let add;
    let result;
    if (sex.value === "Male") {
        switch (parseInt(age.value)) {
            case 50:
                add = 59.86 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 51 :
                add = 60.82 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 52 :
                add = 61.91 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 53 :
                add = 62.88 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 54 :
                add = 63.98 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 55 :
                add = 65.34 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 56 :
                add = 66.77 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 57 :
                add = 68.38 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 58 :
                add = 69.79 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 59 :
                add = 71.38 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 60 :
                add = 73.34 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 61 :
                add = 75.40 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 62 :
                add = 77.73 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 63 :
                add = 79.86 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 64 :
                add = 82.27 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 65 :
                add = 85.24 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 66 :
                add = 88.36 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 67 :
                add = 91.91 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 68 :
                add = 96.82 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 69 :
                add = 102.40 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 70 :
                add = 109.28 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 71 :
                add = 116.50 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 72 :
                add = 124.69 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 73 :
                add = 130.97 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 74 :
                add = 138.08 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 75 :
                add = 146.87 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 76 :
                add = 156.08 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 77 :
                add = 166.54 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 78 :
                add = 178.16 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 79 :
                add = 191.33 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 80 :
                add = 207.61 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 81 :
                add = 224.66 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 82 :
                add = 244.03 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 83 :
                add = 286.23 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 84 :
                add = 318.86 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 85 :
                add = 355.95 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
        }
    } else if (sex.value === "Female") {
                switch (parseInt(age.value)) {
            case 50:
                add = 40.56 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 51 :
                add = 41.58 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 52 :
                add = 42.74 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 53 :
                add = 43.49 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 54 :
                add = 44.34 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 55 :
                add = 45.39 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 56 :
                add = 46.49 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 57 :
                add = 47.73 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 58 :
                add = 48.86 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 59 :
                add = 50.14 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 60 :
                add = 51.72 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 61 :
                add = 53.38 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 62 :
                add = 55.26 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 63 :
                add = 57.44 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 64 :
                add = 59.91 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 65 :
                add = 62.96 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 66 :
                add = 66.16 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 67 :
                add = 69.79 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 68 :
                add = 73.25 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 69 :
                add = 77.18 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 70 :
                add = 82.03 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 71 :
                add = 87.12 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 72 :
                add = 92.90 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 73 :
                add = 98.44 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 74 :
                add = 104.73 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 75 :
                add = 112.49 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 76 :
                add = 120.63 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 77 :
                add = 129.87 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 78 :
                add = 138.29 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 79 :
                add = 147.83 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 80 :
                add = 159.62 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 81 :
                add = 171.96 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 82 :
                add = 185.99 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 83 :
                add = 203.52 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 84 :
                add = 221.74 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
            case 85 :
                add = 242.45 * face.value;
                result = (add + 24) * .0834;
                answer.textContent = "$" + result.toFixed(2);
                break;
        }
    }
    sex.value = "Male";
    age.value = "";
    face.value = "";
})


