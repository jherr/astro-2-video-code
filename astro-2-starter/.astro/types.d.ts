declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof (typeof entryMap)[C]>(
		collection: C,
		entryKey: E
	): Promise<(typeof entryMap)[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof (typeof entryMap)[C]
	>(
		collection: C,
		filter?: (data: (typeof entryMap)[C][E]) => boolean
	): Promise<((typeof entryMap)[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"roadmaps": {
"typescript.mdx": {
  id: "typescript.mdx",
  slug: string,
  body: string,
  collection: "roadmaps",
  data: InferEntrySchema<"roadmaps">
},
},
"videos": {
"-1YhP5IOBCI.mdx": {
  id: "-1YhP5IOBCI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"-TsIUuA3yyE.mdx": {
  id: "-TsIUuA3yyE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"-urz6Sh7RE8.mdx": {
  id: "-urz6Sh7RE8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"0-BsmzlMMIw.mdx": {
  id: "0-BsmzlMMIw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"0W4SdogReDg.mdx": {
  id: "0W4SdogReDg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"0WIFW3s2fDM.mdx": {
  id: "0WIFW3s2fDM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"0eoyWYP6I4Q.mdx": {
  id: "0eoyWYP6I4Q.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"0nDGeQKLFjo.mdx": {
  id: "0nDGeQKLFjo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"0vumsisnqwM.mdx": {
  id: "0vumsisnqwM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"10HkuC8H9m8.mdx": {
  id: "10HkuC8H9m8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"1jlEEmiBSvI.mdx": {
  id: "1jlEEmiBSvI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"1kFX3B2IyH0.mdx": {
  id: "1kFX3B2IyH0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"1x7mI_xuVVo.mdx": {
  id: "1x7mI_xuVVo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"1zCUMlFTDg0.mdx": {
  id: "1zCUMlFTDg0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"2DbX0xFL0nk.mdx": {
  id: "2DbX0xFL0nk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"2rrwPm8fuis.mdx": {
  id: "2rrwPm8fuis.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"2tJedF8I-8Q.mdx": {
  id: "2tJedF8I-8Q.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"432thqUKs-Y.mdx": {
  id: "432thqUKs-Y.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"47wDMcPONAw.mdx": {
  id: "47wDMcPONAw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"49IWKWOZthY.mdx": {
  id: "49IWKWOZthY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"4MmmlWwlST4.mdx": {
  id: "4MmmlWwlST4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"4PoNBZl4t0Y.mdx": {
  id: "4PoNBZl4t0Y.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"4U067O3_fYk.mdx": {
  id: "4U067O3_fYk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"4XTj6sIGTdc.mdx": {
  id: "4XTj6sIGTdc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"4b9LSUZjtzE.mdx": {
  id: "4b9LSUZjtzE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"4cbP95OcfR0.mdx": {
  id: "4cbP95OcfR0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"4wfqc7roa0Q.mdx": {
  id: "4wfqc7roa0Q.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"4zRhgxctUYQ.mdx": {
  id: "4zRhgxctUYQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"56_OUG-0wgI.mdx": {
  id: "56_OUG-0wgI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"5WbpZlJCWNk.mdx": {
  id: "5WbpZlJCWNk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"5lm5xJVqfmA.mdx": {
  id: "5lm5xJVqfmA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"5m7Al81Um88.mdx": {
  id: "5m7Al81Um88.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"5q0VtzJjvNc.mdx": {
  id: "5q0VtzJjvNc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"5zwzyHqBFnA.mdx": {
  id: "5zwzyHqBFnA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"6yBv-_COJkk.mdx": {
  id: "6yBv-_COJkk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"7I-CY1a-Jpk.mdx": {
  id: "7I-CY1a-Jpk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"7kNLXE0hixM.mdx": {
  id: "7kNLXE0hixM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"7ldI5jBsmlI.mdx": {
  id: "7ldI5jBsmlI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"7o1P-SB7yQw.mdx": {
  id: "7o1P-SB7yQw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"87hg99a9cjE.mdx": {
  id: "87hg99a9cjE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"8M5rpG9TD-c.mdx": {
  id: "8M5rpG9TD-c.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"8QtiqXew2QQ.mdx": {
  id: "8QtiqXew2QQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"9y0eY6hs1QM.mdx": {
  id: "9y0eY6hs1QM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"AU7dKWNfWiA.mdx": {
  id: "AU7dKWNfWiA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"AknVkHeYqqg.mdx": {
  id: "AknVkHeYqqg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"BdzFpyGVfVI.mdx": {
  id: "BdzFpyGVfVI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"BtIlaOuN18c.mdx": {
  id: "BtIlaOuN18c.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Bw_tmWEaaIU.mdx": {
  id: "Bw_tmWEaaIU.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"CO7vEjsw3cc.mdx": {
  id: "CO7vEjsw3cc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"CZMXRMdHm34.mdx": {
  id: "CZMXRMdHm34.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"CkHR0OXTYXI.mdx": {
  id: "CkHR0OXTYXI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Cos-ctPX5hw.mdx": {
  id: "Cos-ctPX5hw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"D3PuSLokPZg.mdx": {
  id: "D3PuSLokPZg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"D3XYAx30CNc.mdx": {
  id: "D3XYAx30CNc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"DEPwA3mv_R8.mdx": {
  id: "DEPwA3mv_R8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"DHjZnJRK_S8.mdx": {
  id: "DHjZnJRK_S8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"DM6CgUFyXxw.mdx": {
  id: "DM6CgUFyXxw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"DjzlGfhUyAM.mdx": {
  id: "DjzlGfhUyAM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"DxG17pbgsZg.mdx": {
  id: "DxG17pbgsZg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"EFVCTzqRbqo.mdx": {
  id: "EFVCTzqRbqo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"EH9Suo_J4Ks.mdx": {
  id: "EH9Suo_J4Ks.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"EXI9v6i7bAo.mdx": {
  id: "EXI9v6i7bAo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"EzJF0IUoYhQ.mdx": {
  id: "EzJF0IUoYhQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"F-0SZ_TicXA.mdx": {
  id: "F-0SZ_TicXA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"FC5gM49xQPE.mdx": {
  id: "FC5gM49xQPE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"FFu0-9hGyX4.mdx": {
  id: "FFu0-9hGyX4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"FTGWIH4RlHg.mdx": {
  id: "FTGWIH4RlHg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"FmGYLJlhXco.mdx": {
  id: "FmGYLJlhXco.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"FrLzKMWa3Gk.mdx": {
  id: "FrLzKMWa3Gk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"G1gyXbLdRzc.mdx": {
  id: "G1gyXbLdRzc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"GBAO3YKMonI.mdx": {
  id: "GBAO3YKMonI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"GMeQ51MCegI.mdx": {
  id: "GMeQ51MCegI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"GjkQS5J6K6k.mdx": {
  id: "GjkQS5J6K6k.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"GkUFmlVs-No.mdx": {
  id: "GkUFmlVs-No.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"GsRnExrC89A.mdx": {
  id: "GsRnExrC89A.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"H2kxc_ZrSPI.mdx": {
  id: "H2kxc_ZrSPI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"HUVawJXeHfU.mdx": {
  id: "HUVawJXeHfU.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"HbSvuxr2kzA.mdx": {
  id: "HbSvuxr2kzA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Hsk5tM_N420.mdx": {
  id: "Hsk5tM_N420.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"HwNArS3f1Ss.mdx": {
  id: "HwNArS3f1Ss.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"HxyaftP6hJ8.mdx": {
  id: "HxyaftP6hJ8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ICeH3uBGGeo.mdx": {
  id: "ICeH3uBGGeo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ILbRI4m2D9Y.mdx": {
  id: "ILbRI4m2D9Y.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ITVS76JpNn8.mdx": {
  id: "ITVS76JpNn8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"J-M11cC_NL4.mdx": {
  id: "J-M11cC_NL4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"J81MS6H1NBQ.mdx": {
  id: "J81MS6H1NBQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"JBu2ZTPgiKI.mdx": {
  id: "JBu2ZTPgiKI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"JKj-J83Qop0.mdx": {
  id: "JKj-J83Qop0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"JaM2rExmmqs.mdx": {
  id: "JaM2rExmmqs.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"JauJhGTBFsc.mdx": {
  id: "JauJhGTBFsc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"K-yQB9YGmgE.mdx": {
  id: "K-yQB9YGmgE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"KBoNbQPQwwQ.mdx": {
  id: "KBoNbQPQwwQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"KBwhyxWGFsE.mdx": {
  id: "KBwhyxWGFsE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"KEc0LLQjyfQ.mdx": {
  id: "KEc0LLQjyfQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Kn8TKLcd6d4.mdx": {
  id: "Kn8TKLcd6d4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"LAu1p6tmj_Y.mdx": {
  id: "LAu1p6tmj_Y.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"LDS1ll93P-s.mdx": {
  id: "LDS1ll93P-s.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"LKVHFHJsiO0.mdx": {
  id: "LKVHFHJsiO0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"LZc2hSghezM.mdx": {
  id: "LZc2hSghezM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Lam0cYOEst8.mdx": {
  id: "Lam0cYOEst8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"LsvZM7ihXQI.mdx": {
  id: "LsvZM7ihXQI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"LyS1bB96FDg.mdx": {
  id: "LyS1bB96FDg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"MJaGti42c5c.mdx": {
  id: "MJaGti42c5c.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"MLLALr3ctoE.mdx": {
  id: "MLLALr3ctoE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"MU8_LP8R_ZI.mdx": {
  id: "MU8_LP8R_ZI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Mi6sosJuDDY.mdx": {
  id: "Mi6sosJuDDY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"MkNCkKomu_s.mdx": {
  id: "MkNCkKomu_s.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"MlDTHzK1vKI.mdx": {
  id: "MlDTHzK1vKI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"MpdFj8MEuJA.mdx": {
  id: "MpdFj8MEuJA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"NCSkAUP3Nv0.mdx": {
  id: "NCSkAUP3Nv0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"NGqoq5D_rEE.mdx": {
  id: "NGqoq5D_rEE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"NJxagi7K-D8.mdx": {
  id: "NJxagi7K-D8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"NaJI7RkSPx8.mdx": {
  id: "NaJI7RkSPx8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"NgkYH97Z3nk.mdx": {
  id: "NgkYH97Z3nk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"OCg4DJyVGk0.mdx": {
  id: "OCg4DJyVGk0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"OpMAH2hzKi8.mdx": {
  id: "OpMAH2hzKi8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"OqcHoLWyyIw.mdx": {
  id: "OqcHoLWyyIw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"OseG8oQ2RDM.mdx": {
  id: "OseG8oQ2RDM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"P0GxuOPyLXo.mdx": {
  id: "P0GxuOPyLXo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"P95DuIBwnqw.mdx": {
  id: "P95DuIBwnqw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"PSzCtdM20Fc.mdx": {
  id: "PSzCtdM20Fc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"P_5Yxktq9Rs.mdx": {
  id: "P_5Yxktq9Rs.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"PbswZshAKF8.mdx": {
  id: "PbswZshAKF8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Q4QDyr0jLfo.mdx": {
  id: "Q4QDyr0jLfo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Q4dos7-gX68.mdx": {
  id: "Q4dos7-gX68.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"QChEaOHauZY.mdx": {
  id: "QChEaOHauZY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Qs7NkP6TJn8.mdx": {
  id: "Qs7NkP6TJn8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"QuLfCUh-iwI.mdx": {
  id: "QuLfCUh-iwI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"QvcyL_ZGhf0.mdx": {
  id: "QvcyL_ZGhf0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"RAJD4KpX8LA.mdx": {
  id: "RAJD4KpX8LA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"RCgJQq_pDfg.mdx": {
  id: "RCgJQq_pDfg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"RonRwypIVaw.mdx": {
  id: "RonRwypIVaw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"S2L4fatK0Ek.mdx": {
  id: "S2L4fatK0Ek.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"S6Tu8oXyoRk.mdx": {
  id: "S6Tu8oXyoRk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"SBysJEnvvhQ.mdx": {
  id: "SBysJEnvvhQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"SZ2kAkMdAZE.mdx": {
  id: "SZ2kAkMdAZE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Sti_XBFn5Xw.mdx": {
  id: "Sti_XBFn5Xw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"UbEx1v26kCs.mdx": {
  id: "UbEx1v26kCs.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"VAIR7cRBlFw.mdx": {
  id: "VAIR7cRBlFw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"VBbkLd-_dPU.mdx": {
  id: "VBbkLd-_dPU.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"VcOMq3LQtBU.mdx": {
  id: "VcOMq3LQtBU.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"VrfJeXj7TiQ.mdx": {
  id: "VrfJeXj7TiQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"W0RbrAZtj7I.mdx": {
  id: "W0RbrAZtj7I.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"W5TXxJIyBP0.mdx": {
  id: "W5TXxJIyBP0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"WOfL5q2HznI.mdx": {
  id: "WOfL5q2HznI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"XYq9QpgAx8g.mdx": {
  id: "XYq9QpgAx8g.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"XnlECbwcJZ0.mdx": {
  id: "XnlECbwcJZ0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"XnyZXNnWAOA.mdx": {
  id: "XnyZXNnWAOA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Xt1dNdJpgw4.mdx": {
  id: "Xt1dNdJpgw4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"Xw9XMNn2k0o.mdx": {
  id: "Xw9XMNn2k0o.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"XzE-PzALyDc.mdx": {
  id: "XzE-PzALyDc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"YQvQwTAqXE8.mdx": {
  id: "YQvQwTAqXE8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"YzPDzWM_k_8.mdx": {
  id: "YzPDzWM_k_8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ZD7viwwRLAw.mdx": {
  id: "ZD7viwwRLAw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ZFNxTy3fOO0.mdx": {
  id: "ZFNxTy3fOO0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ZG3xZP0SXYs.mdx": {
  id: "ZG3xZP0SXYs.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ZKlXqrcBx88.mdx": {
  id: "ZKlXqrcBx88.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"_Tr9ZcXcMjQ.mdx": {
  id: "_Tr9ZcXcMjQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"_VItRGUFyKU.mdx": {
  id: "_VItRGUFyKU.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"_WpzQTHBRLE.mdx": {
  id: "_WpzQTHBRLE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"_ZQSPYDlk3U.mdx": {
  id: "_ZQSPYDlk3U.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"_ZnNZWlyw7M.mdx": {
  id: "_ZnNZWlyw7M.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"_cbJ2iN25_I.mdx": {
  id: "_cbJ2iN25_I.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"_gRxCvDjWjs.mdx": {
  id: "_gRxCvDjWjs.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"_m2XfYzBV2c.mdx": {
  id: "_m2XfYzBV2c.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"_qCRuFrdhYw.mdx": {
  id: "_qCRuFrdhYw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"aDqGIhl7cdo.mdx": {
  id: "aDqGIhl7cdo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"aHA581Mp2Mo.mdx": {
  id: "aHA581Mp2Mo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"aM1bxz-82Qw.mdx": {
  id: "aM1bxz-82Qw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"aOt4Hz3ze3Q.mdx": {
  id: "aOt4Hz3ze3Q.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"apg9XR35pAM.mdx": {
  id: "apg9XR35pAM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"b-Eo2v0EzFw.mdx": {
  id: "b-Eo2v0EzFw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"bCU9BUfwUJE.mdx": {
  id: "bCU9BUfwUJE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"bLyl4VDNPyY.mdx": {
  id: "bLyl4VDNPyY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"b_p3yP57A9w.mdx": {
  id: "b_p3yP57A9w.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"bk5JvHGFv3A.mdx": {
  id: "bk5JvHGFv3A.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"bmKDT-yG2eE.mdx": {
  id: "bmKDT-yG2eE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"bvdHVxqjv80.mdx": {
  id: "bvdHVxqjv80.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"cHUAvVkOBvY.mdx": {
  id: "cHUAvVkOBvY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"cpG5W4uyqz0.mdx": {
  id: "cpG5W4uyqz0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"d58QLA2bnug.mdx": {
  id: "d58QLA2bnug.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"dH6i3GurZW8.mdx": {
  id: "dH6i3GurZW8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"dMkYWwYmJB8.mdx": {
  id: "dMkYWwYmJB8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"e8Aqtak8stI.mdx": {
  id: "e8Aqtak8stI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"eAfUfKYcvBo.mdx": {
  id: "eAfUfKYcvBo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"eFh2Kr9hfyo.mdx": {
  id: "eFh2Kr9hfyo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"eQE9wp4PTY4.mdx": {
  id: "eQE9wp4PTY4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"eVfw4pRDUIY.mdx": {
  id: "eVfw4pRDUIY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ekIDdZE7YjM.mdx": {
  id: "ekIDdZE7YjM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"emhwHjAsyss.mdx": {
  id: "emhwHjAsyss.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"erfWjBNDdOE.mdx": {
  id: "erfWjBNDdOE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"f3Cn0CGytSQ.mdx": {
  id: "f3Cn0CGytSQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"fu10QR3IU-k.mdx": {
  id: "fu10QR3IU-k.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"g1LtqLVKgIA.mdx": {
  id: "g1LtqLVKgIA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"gChqkchbn9o.mdx": {
  id: "gChqkchbn9o.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"gED6KGBQgak.mdx": {
  id: "gED6KGBQgak.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"gtnDe_2YzFQ.mdx": {
  id: "gtnDe_2YzFQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"hHXzchWLoqw.mdx": {
  id: "hHXzchWLoqw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"i8kner-Yrj0.mdx": {
  id: "i8kner-Yrj0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"iFEOdoHp19U.mdx": {
  id: "iFEOdoHp19U.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"in80vPuCfro.mdx": {
  id: "in80vPuCfro.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"iwPGS-2kvSA.mdx": {
  id: "iwPGS-2kvSA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ixCxoFAoOps.mdx": {
  id: "ixCxoFAoOps.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"j8AVXNozac8.mdx": {
  id: "j8AVXNozac8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"j8s01ThR7bQ.mdx": {
  id: "j8s01ThR7bQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"j92fxPpFaL8.mdx": {
  id: "j92fxPpFaL8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"jdzLpEnRAqg.mdx": {
  id: "jdzLpEnRAqg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"k42kEU2izKc.mdx": {
  id: "k42kEU2izKc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"kSXpwOElFY0.mdx": {
  id: "kSXpwOElFY0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"kdXKz1UWc3E.mdx": {
  id: "kdXKz1UWc3E.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"kh27J3nI_oY.mdx": {
  id: "kh27J3nI_oY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ki0Q9QeXH9Q.mdx": {
  id: "ki0Q9QeXH9Q.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ks0Fsn6Csa4.mdx": {
  id: "ks0Fsn6Csa4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"lGEgtSETz9Y.mdx": {
  id: "lGEgtSETz9Y.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"lStfMBiWROQ.mdx": {
  id: "lStfMBiWROQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"lgJmSQwQ-gk.mdx": {
  id: "lgJmSQwQ-gk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"li15G-SNjls.mdx": {
  id: "li15G-SNjls.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"m3YrZav5-CU.mdx": {
  id: "m3YrZav5-CU.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"mOA1SA9sfcw.mdx": {
  id: "mOA1SA9sfcw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"mPU9cFn7SmI.mdx": {
  id: "mPU9cFn7SmI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"muCLu1-v_zA.mdx": {
  id: "muCLu1-v_zA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"n6ZQSq3f14M.mdx": {
  id: "n6ZQSq3f14M.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"nGZCL6Wd_zQ.mdx": {
  id: "nGZCL6Wd_zQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"nImE4P8Wc_M.mdx": {
  id: "nImE4P8Wc_M.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"nMhD9IB9YJ8.mdx": {
  id: "nMhD9IB9YJ8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"nOq1a6-8M-E.mdx": {
  id: "nOq1a6-8M-E.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"njXeMeAu4Sg.mdx": {
  id: "njXeMeAu4Sg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"nkpPOVUHT1k.mdx": {
  id: "nkpPOVUHT1k.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"o3JWb04DRIs.mdx": {
  id: "o3JWb04DRIs.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"oAtlrDD7eFM.mdx": {
  id: "oAtlrDD7eFM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"oQUpcAnN8v0.mdx": {
  id: "oQUpcAnN8v0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"p4XQeUaskeQ.mdx": {
  id: "p4XQeUaskeQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"pGy5vrFJlH0.mdx": {
  id: "pGy5vrFJlH0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"pM5I2h7qjow.mdx": {
  id: "pM5I2h7qjow.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"qACBGbBxVYY.mdx": {
  id: "qACBGbBxVYY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"qCX8rw4qOSA.mdx": {
  id: "qCX8rw4qOSA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"rWanEGMkXwc.mdx": {
  id: "rWanEGMkXwc.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"rY_XqfSHock.mdx": {
  id: "rY_XqfSHock.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"raTvJzKoZJo.mdx": {
  id: "raTvJzKoZJo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"rgZkd-RAYfE.mdx": {
  id: "rgZkd-RAYfE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"s6nG0byDI-o.mdx": {
  id: "s6nG0byDI-o.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"s_Fs4AXsTnA.mdx": {
  id: "s_Fs4AXsTnA.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"sf355K1iNjE.mdx": {
  id: "sf355K1iNjE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"sndI4pxdB9U.mdx": {
  id: "sndI4pxdB9U.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"sqTPGMipjHk.mdx": {
  id: "sqTPGMipjHk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"tD7DM99nH30.mdx": {
  id: "tD7DM99nH30.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"tFDvEITdJZ8.mdx": {
  id: "tFDvEITdJZ8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"tGLwKqRCP_A.mdx": {
  id: "tGLwKqRCP_A.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"tcNRdIqDnjY.mdx": {
  id: "tcNRdIqDnjY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"tcZbY-Q0TIE.mdx": {
  id: "tcZbY-Q0TIE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"tfr7ZIqNhq4.mdx": {
  id: "tfr7ZIqNhq4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"tigwyK5Khck.mdx": {
  id: "tigwyK5Khck.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"tmfvqLFeR10.mdx": {
  id: "tmfvqLFeR10.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ufQcDD1kQCI.mdx": {
  id: "ufQcDD1kQCI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ukecIFE6Now.mdx": {
  id: "ukecIFE6Now.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"v6OR7C304h4.mdx": {
  id: "v6OR7C304h4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"vX6EXi5I9LE.mdx": {
  id: "vX6EXi5I9LE.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"vrZpGsL1-Ws.mdx": {
  id: "vrZpGsL1-Ws.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"vtM0-uhYLxM.mdx": {
  id: "vtM0-uhYLxM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"w58aZjACETQ.mdx": {
  id: "w58aZjACETQ.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"wU06eTMQ6yI.mdx": {
  id: "wU06eTMQ6yI.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"wYTL1uqLXho.mdx": {
  id: "wYTL1uqLXho.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"wg6iqAdBF9A.mdx": {
  id: "wg6iqAdBF9A.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"wtb1JRE-fgk.mdx": {
  id: "wtb1JRE-fgk.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"wxnwPLLIJCY.mdx": {
  id: "wxnwPLLIJCY.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"x22F4hSdZJM.mdx": {
  id: "x22F4hSdZJM.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"x9usS4l1VD0.mdx": {
  id: "x9usS4l1VD0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"xdJQ1GtUQCg.mdx": {
  id: "xdJQ1GtUQCg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"xrbuvD5HBq4.mdx": {
  id: "xrbuvD5HBq4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"yZDvE0mP4Y4.mdx": {
  id: "yZDvE0mP4Y4.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"yZPGUHRUXVw.mdx": {
  id: "yZPGUHRUXVw.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"yo87SLp4jOo.mdx": {
  id: "yo87SLp4jOo.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ypN-Uwshc5M.mdx": {
  id: "ypN-Uwshc5M.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"ytXM05PVcFU.mdx": {
  id: "ytXM05PVcFU.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"z8lDwLKthr8.mdx": {
  id: "z8lDwLKthr8.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"zA6EDTErWUg.mdx": {
  id: "zA6EDTErWUg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"zJvB2hnsXr0.mdx": {
  id: "zJvB2hnsXr0.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"zM_ZiSl2n2E.mdx": {
  id: "zM_ZiSl2n2E.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"zYKsUJv4uiU.mdx": {
  id: "zYKsUJv4uiU.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
"zwQs4wXr9Bg.mdx": {
  id: "zwQs4wXr9Bg.mdx",
  slug: string,
  body: string,
  collection: "videos",
  data: InferEntrySchema<"videos">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
