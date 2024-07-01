package main

import (
	"fmt"
)

func main() {
	n := 500

	primeFactors := make(map[int][]int)
	frequencies := make(map[int]int)
	primes := make(map[int]bool)

	// calculate prime factors
	for i := 2; i <= n; i++ {
		primeFactors[i] = []int{}

		// check all factors
		for j := 2; j < i; j++ {
			if i%j == 0 {
				if primes[j] {
					primeFactors[i] = append(primeFactors[i], j)
					frequencies[j]++
				}
			}
		}

		// if none have been found, mark as prime
		if len(primeFactors[i]) == 0 {
			primeFactors[i] = []int{i}
			frequencies[i]++
			primes[i] = true
		}
	}

	// loop again through all possible values, print out frequencies of primes
	// can't iterate over map keys bc order isn't preserved
	for factor := 2; factor <= n; factor++ {
		if !primes[factor] {
			continue
		}
		k, v := factor, frequencies[factor]
		fmt.Printf("%3d: ", k)
		for i := 0; i < v; i++ {
			fmt.Print("█")
		}
		fmt.Println()
	}
}
