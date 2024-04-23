import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  Button,
  ChangeCodeMirrorLanguage,
  ConditionalContents,
  CreateLink,
  DiffSourceToggleWrapper,
  InsertCodeBlock,
  InsertTable,
  ListsToggle,
  Separator,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin
} from "@mdxeditor/editor";

const rest = [
  headingsPlugin(),
  listsPlugin(),
  quotePlugin(),
  thematicBreakPlugin(),
  markdownShortcutPlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  tablePlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
  codeMirrorPlugin({
    codeBlockLanguages: { js: "JavaScript", html: "HTML", css: "CSS" },
  }),
  markdownShortcutPlugin(),
  diffSourcePlugin({
    diffMarkdown: "An older version",
    viewMode: "rich-text",
    readOnlyDiff: true,
  }),
];

const toolbar = toolbarPlugin({
  toolbarContents: () => (
    <>
      <UndoRedo />
      <Separator />
      <BoldItalicUnderlineToggles />
      <Separator />
      <ListsToggle />
      <Separator />
      <BlockTypeSelect />
      <Separator />
      <CreateLink />
      <InsertTable />
      <Separator />
      <InsertCodeBlock />
      <ConditionalContents
        options={[
          {
            when: (editor) => editor?.editorType === "codeblock",
            contents: () => (
              <>
                <Separator />
                <ChangeCodeMirrorLanguage />
              </>
            ),
          },
        ]}
      />
      <Separator />
      <Button>
        <span>Shere</span>
      </Button>
      <Separator />

      <DiffSourceToggleWrapper>
        <></>
      </DiffSourceToggleWrapper>
    </>
  ),
});

export { rest, toolbar };

