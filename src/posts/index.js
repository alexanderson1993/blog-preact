import aletteraday from './a-letter-a-day.md';
import alone from './alone.md';
import becausehelives from './becausehelives.md';
import becauseofhim from './becauseofhim.md';
import becoming from './becoming.md';
import brave from './brave.md';
import calledtoserve from './called-to-serve.md';
import care from './care.md';
import confessionsofareturnedmissionary from './confessions-of-a-returned-missionary.md';
import dad from './dad.md';
import facebookfast from './facebookfast.md';
import fathers from './fathers.md';
import ferrarisdontgrowontrees from './ferraris-dont-grow-on-trees.md';
import fishy from './fishy.md';
import howtobuildaspaceshippart1thebackground from './how-to-build-a-space-ship-part-1-the-background.md';
import howtobuildaspaceshippart2theplans from './how-to-build-a-space-ship-part-2-the-plans.md';
import howsyourheart from './hows-your-heart.md';
import newyearnewblog from './new-year-new-blog.md';
import nice from './nice.md';
import ninja from './ninja.md';
import pixarsrulesofstorytelling from './pixars-rules-of-storytelling.md';
import shankyou from './shank-you.md';
import spiritualexperiencesatthehappiestplaceonearth from './spiritual-experiences-at-the-happiest-place-on-earth.md';
import thechoice from './the-choice.md';
import thefeels from './the-feels.md';
import thisiswhathappenswhenidontblogfortoolong from './this-is-what-happens-when-i-dont-blog-for-too-long.md';
import thoughtsonlove from './thoughts-on-love.md';
import twothousandandfourteen from './two-thousand-and-fourteen.md';
import twozeroonesix from './two-zero-one-six.md';
import whywepraythewaywedo from './why-we-pray-the-way-we-do.md';

const posts = [aletteraday,
	alone,
	becausehelives,
	becauseofhim,
	becoming,
	brave,
	calledtoserve,
	care,
	confessionsofareturnedmissionary,
	dad,
	facebookfast,
	fathers,
	ferrarisdontgrowontrees,
	fishy,
	howtobuildaspaceshippart1thebackground,
	howtobuildaspaceshippart2theplans,
	howsyourheart,
	newyearnewblog,
	nice,
	ninja,
	pixarsrulesofstorytelling,
	shankyou,
	spiritualexperiencesatthehappiestplaceonearth,
	thechoice,
	thefeels,
	thisiswhathappenswhenidontblogfortoolong,
	thoughtsonlove,
	twothousandandfourteen,
	twozeroonesix,
	whywepraythewaywedo
];

export default posts.filter(p => p).map(p => p.split('---').slice(1).reduce((prev, next, i) => {
	if (i === 0) {
		next.split('\n').map(c => c ? c.split(': ').map(d => d.trim().replace(/"/gi, '')) : null).filter(e => e).forEach(a => {
			if (a[0] === 'date') {
				prev[a[0]] = new Date(a[1]);
			}
			else {
				prev[a[0]] = a[1];
			}
		});
	}
	else {
		prev.content = next;
	}
	return prev;
},{})).sort((a, b) => {
	if (a.date > b.date) return -1;
	if (a.date < b.date) return 1;
	return 0;
});
