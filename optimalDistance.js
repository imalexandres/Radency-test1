const chooseOptimalDistance = (t, k, ls) => {

    let conditions = Boolean;
    let res = [];
    let sums = [];

    if (ls.length >=k) {
        conditions = true;

        const combinations = (ls, k, start, idx, current) => {

            if (idx === k) {
                res.push([...current])

                return
            }
            for (let i = start; i < ls.length; i += 1) {

                current[idx] = ls[i]
                combinations(ls, k, i + 1, idx + 1, current)
            }
        }

        const bestRoute = () => {

            res.forEach(el => {
                let temp = el.reduce((sum, el) => sum + el)

                if (temp <= t) return sums.push(temp);
            });
            return sums.length ? conditions = true : conditions = false;
        }

        combinations(ls, k, 0, 0, [])
        bestRoute();

    } else conditions = false;

    return conditions ? Math.max(...sums) : null;
}

chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]); // null


