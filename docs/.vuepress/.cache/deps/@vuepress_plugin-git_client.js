import { U as computed, er as toValue, nt as defineComponent, pt as h } from "./vue.runtime.esm-bundler-_ogR8zrB.js";
import { useToggle } from "./@vueuse_core.js";
import { T as je, z as a } from "./client-BmgvOT0W.js";
import { useData } from "vuepress/client";
import "C:/duilehaojiu/dzzl/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_a62e2188a31b50515eb392d9ac96ff9b/node_modules/@vuepress/plugin-git/dist/GitChangelog-Do7jXfkp.css";
import "C:/duilehaojiu/dzzl/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_a62e2188a31b50515eb392d9ac96ff9b/node_modules/@vuepress/plugin-git/dist/GitContributors-BiR-YbYa.css";
//#region node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_a62e2188a31b50515eb392d9ac96ff9b/node_modules/@vuepress/plugin-git/dist/VPHeader-D3qaJHvA.js
var n = typeof __GIT_LOCALES__ > `u` ? {} : __GIT_LOCALES__;
var r = () => je(n);
var i = ({ level: t = 2, text: n, anchor: r }) => h(`h${t || 2}`, {
	id: r,
	tabindex: `-1`
}, h(`a`, {
	href: `#${r}`,
	class: `header-anchor`
}, h(`span`, n)));
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_a62e2188a31b50515eb392d9ac96ff9b/node_modules/@vuepress/plugin-git/dist/GitChangelog-Do7jXfkp.js
var l$1 = typeof __GIT_OPTIONS__ > `u` ? {} : __GIT_OPTIONS__;
var u = (e, t) => !e || a(e) ? e : t === `github` ? `https://github.com/${e}` : t === `gitee` ? `https://gitee.com/${e}` : e;
var d = /#(?<issue>\d+)/gu;
var f = typeof __GIT_CHANGELOG__ == `boolean` && __GIT_CHANGELOG__ ? (e = !0) => {
	let { frontmatter: t, lang: r, page: i } = useData(), { pattern: s = {}, provider: c } = l$1, f = u(l$1.repo, c);
	return computed(() => {
		if (t.value.changelog === !1 || !toValue(e)) return [];
		let n = new Intl.DateTimeFormat(r.value, { dateStyle: `short` });
		return (i.value.git?.changelog ?? []).map((e) => {
			let t = Object.assign({ date: n.format(e.time) }, e), r = e.submodule?.repoUrl ?? f;
			return s.issue && r && (t.message = t.message.replace(d, (e, t) => `<a href="${s.issue.replace(`:issue`, t).replace(`:repo`, r)}" target="_blank" rel="noopener noreferrer">${e}</a>`)), s.commit && r && (t.commitUrl = s.commit.replace(`:hash`, t.hash).replace(`:repo`, r)), s.tag && r && t.tag && (t.tagUrl = s.tag.replace(`:tag`, t.tag).replace(`:repo`, r)), t;
		});
	});
} : () => computed(() => []);
var p = (t = !0) => {
	let { lang: r$2, page: i } = useData(), s = r();
	return computed(() => {
		if (!toValue(t)) return null;
		let e = i.value.git?.updatedTime ?? i.value.git?.changelog?.[0].time;
		if (!e) return null;
		let n = new Date(e);
		return {
			date: n,
			text: new Intl.DateTimeFormat(r$2.value, {
				dateStyle: `short`,
				timeStyle: `short`
			}).format(e),
			iso: n.toISOString(),
			locale: s.value.latestUpdateAt
		};
	});
};
var m = defineComponent({
	name: `GitChangelog`,
	props: {
		title: String,
		headerLevel: {
			type: Number,
			default: 2
		}
	},
	setup(n) {
		let r$3 = f(), a = r(), o = p(), [s, l] = useToggle(), u = () => h(`div`, {
			class: `vp-changelog-header`,
			onClick: () => l()
		}, [h(`div`, { class: `vp-latest-updated` }, [h(`span`, { class: `vp-changelog-icon` }), h(`span`, { "data-allow-mismatch": `` }, o.value.text)]), h(`div`, [h(`span`, { class: `vp-changelog-menu-icon` }), h(`span`, a.value.viewChangelog)])]), d = ({ item: e }) => h(`li`, { class: `vp-changelog-item-tag` }, h(`div`, [h(`a`, { class: `vp-changelog-tag` }, h(`code`, e.tag)), h(`span`, {
			class: `vp-changelog-date`,
			"data-allow-mismatch": ``
		}, [
			a.value.timeOn,
			` `,
			h(`time`, { datetime: new Date(e.time).toISOString() }, e.date)
		])])), m = ({ item: e }) => h(`li`, { class: `vp-changelog-item-commit` }, [
			h(e.commitUrl ? `a` : `span`, {
				class: `vp-changelog-hash`,
				href: e.commitUrl,
				target: `_blank`,
				rel: `noreferrer`
			}, [h(`code`, e.hash.slice(0, 5))]),
			h(`span`, { class: `vp-changelog-divider` }, `-`),
			h(`span`, {
				class: `vp-changelog-message`,
				innerHTML: e.message
			}),
			h(`span`, {
				class: `vp-changelog-date`,
				"data-allow-mismatch": ``
			}, [
				a.value.timeOn || `on`,
				` `,
				h(`time`, { datetime: new Date(e.time).toISOString() }, e.date)
			])
		]);
		return () => r$3.value.length > 0 ? [h(i, {
			level: n.headerLevel,
			anchor: `doc-changelog`,
			text: n.title || a.value.changelog
		}), h(`div`, { class: [`vp-changelog-wrapper`, { active: s.value }] }, [h(u), h(`ul`, { class: `vp-changelog-list` }, [r$3.value.map((e) => e.tag ? h(d, {
			item: e,
			key: e.tag
		}) : h(m, {
			item: e,
			key: e.hash
		}))])])] : null;
	}
});
//#endregion
//#region node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_a62e2188a31b50515eb392d9ac96ff9b/node_modules/@vuepress/plugin-git/dist/GitContributors-BiR-YbYa.js
var s = typeof __GIT_CONTRIBUTORS__ == `boolean` && __GIT_CONTRIBUTORS__ ? (e = !0) => {
	let { frontmatter: t, page: r } = useData();
	return computed(() => t.value.contributors === !1 || !toValue(e) ? [] : r.value.git.contributors ?? []);
} : () => computed(() => []);
var c = ({ name: e, url: t, avatar: n }) => h(t ? `a` : `span`, {
	href: t,
	target: `_blank`,
	rel: `noreferrer`,
	class: `vp-contributor`
}, [n ? h(`img`, {
	src: n,
	alt: ``,
	class: `vp-contributor-avatar`
}) : null, h(`span`, { class: `vp-contributor-name` }, e)]);
var l = defineComponent({
	name: `GitContributors`,
	props: {
		title: String,
		headerLevel: {
			type: Number,
			default: 2
		}
	},
	setup(n) {
		let r$1 = s(), a = r();
		return () => r$1.value.length > 0 ? [h(i, {
			level: n.headerLevel,
			anchor: `doc-contributors`,
			text: n.title || a.value.contributors
		}), h(`div`, { class: `vp-contributors` }, r$1.value.map((e) => h(c, e)))] : null;
	}
});
//#endregion
export { m as GitChangelog, c as GitContributor, l as GitContributors, i as VPHeader, n as locales, f as useChangelog, s as useContributors, r as useGitLocale, p as useLastUpdated };
