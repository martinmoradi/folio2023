import {
  InstructionsStyle,
  InstructionsStyle1,
  InstructionsStyle2,
  InstructionsStyle3,
  InstructionsStyle7,
} from '@/components/dom/Instructions.style'
export default function Instructions({ children }) {
  return (
    <InstructionsStyle style={{ maxWidth: 'calc(100% - 28px)' }}>
      <InstructionsStyle1>{children}</InstructionsStyle1>
      <InstructionsStyle2>
        Update your header in<InstructionsStyle3>@/config</InstructionsStyle3>
        <br />
        The layout is set in<InstructionsStyle3>@/pages/_app</InstructionsStyle3>
        <br />
        The canvas is configured in<InstructionsStyle3>@/components/canvas/Scene</InstructionsStyle3>
        <br />
        Update your index component in<InstructionsStyle3>@/pages/index</InstructionsStyle3>
        <br />
        Delete placeholder pages<InstructionsStyle7>@/pages/blob</InstructionsStyle7>
        <br />
        Delete<InstructionsStyle7>@/components/dom/Instructions</InstructionsStyle7>
        <br />
        Delete<InstructionsStyle7>@/components/canvas/Blob</InstructionsStyle7>&{' '}
        <InstructionsStyle7>/Logo</InstructionsStyle7>
      </InstructionsStyle2>
    </InstructionsStyle>
  )
}
