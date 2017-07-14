import { h } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Posts from 'async!../../routes/posts';
import Projects from 'async!../../routes/projects';
import Resume from 'async!../../routes/resume';

import style from './style';

export default () => {
	const handleRoute = e => {
		this.currentUrl = e.url;
	};
	return (<div>
		<nav>
		  <Link activeClassName={style.active} href="/">Posts</Link>
		  <Link activeClassName={style.active} href="/projects">Projects</Link>
		  <Link activeClassName={style.active} href="/resume">Resume</Link>
		</nav>
		<Router onChange={handleRoute}>
		  <Posts path="/" />
		  <Projects path="/projects/" />
		  <Resume path="/resume/" />
		</Router>
	</div>);
};
