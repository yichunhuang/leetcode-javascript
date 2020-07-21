
class Trie {
	constructor() {
		this.root = {}
	}

	/**
	* Inserts a word into the trie.
	* @param {string} word
	* @return {void}
	*/
	insert(word) {
		let current = this.root
		word.split('').forEach(w => {
			if (!current[w]) {
				current[w] = {}
			}
			current = current[w]
		})
		current.isOneWord = true
	}

	traverse(word) {
		let current = this.root
		for (let i = 0; i < word.length; i++) {
			if (!current) {
				return null
			}
			current = current[word[i]]
		}
		return current
	}
	/**
	* Returns if the word is in the trie.
	* @param {string} word
	* @return {boolean}
	*/
	search(word) {
		const node = this.traverse(word)
		return !!node && !!node.isOneWord
	}

	/**
	 * Returns if there is any word in the trie that starts with the given prefix.
	 * @param {string} prefix
	 * @return {boolean}
	 */
	startsWith(word) {
		const node = this.traverse(word)
		return !!node
	}
}
