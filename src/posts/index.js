export default preval`
const postsDir = './src/posts/';
const fs = require('fs');
module.exports = fs.readdirSync(postsDir).filter(p => p.indexOf('.md') > -1).map(p => {
	return fs.readFileSync(postsDir + p, 'utf-8').split('---').slice(1).reduce((prev, next, i) => {
			if (i === 0) {
				next.split('\\n')
					.map(
						c =>
							c ? c.split(': ').map(d => d.trim().replace(/"/gi, '')) : null
					)
					.filter(e => e)
					.forEach(a => {
						if (a[0] === 'date') {
							prev[a[0]] = new Date(a[1]);
						} else {
							prev[a[0]] = a[1];
						}
					});
			} else {
				prev.content = next;
			}
			return prev;
		}, {})
}).sort((a, b) => {
		if (a.date > b.date) return -1;
		if (a.date < b.date) return 1;
		return 0;
	});`;
