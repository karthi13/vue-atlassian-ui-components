import { h } from 'vue'
import { render, screen } from "@testing-library/vue"
import Button from "./Button.vue"
import { BUTTON_APPEARANCE, BUTTON_SIZE, BUTTON_SHAPE } from './Button.types'

const BUTTON_TEXT = "Click me";

describe.concurrent('Button appearance', () => {
  it('default button', async () => {
    const buttonWrapper = render(Button, {
      slots: { default: BUTTON_TEXT }
    })
    const button = await screen.findByText(BUTTON_TEXT)
    expect(button.innerHTML).toBe(BUTTON_TEXT)
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('primary button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.PRIMARY },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('subtle button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.SUBTLE },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('warning button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.WARNING },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('danger button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.DANGER },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('success button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.SUCCESS },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });
});

describe('Button size', () => {
  it('small button', async () => {
    const buttonWrapper = render(Button, {
      props: { size: BUTTON_SIZE.SMALL },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('medium button', async () => {
    const buttonWrapper = render(Button, {
      props: { size: BUTTON_SIZE.MEDIUM },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('large button', async () => {
    const buttonWrapper = render(Button, {
      props: { size: BUTTON_SIZE.LARGE },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });
});

describe('Button outline', () => {
  it('default button', async () => {
    const buttonWrapper = render(Button, {
      props: { outline: true },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('primary button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.PRIMARY, outline: true },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('subtle button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.SUBTLE, outline: true },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('warning button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.WARNING, outline: true },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('danger button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.DANGER, outline: true },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('success button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.SUCCESS, outline: true },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });
});

describe('Button shape', () => {
  it('rounded button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.PRIMARY, shape: BUTTON_SHAPE.ROUNDED },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('square button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.PRIMARY, shape: BUTTON_SHAPE.SQUARE },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('pill button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.PRIMARY, shape: BUTTON_SHAPE.PILL },
      slots: { default: BUTTON_TEXT }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });
});

describe('Button with icons', () => {
  it('Icon before button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.PRIMARY },
      slots: { default: [ h('email-icon', ''), ' ' , BUTTON_TEXT ] }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('Icon after button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.PRIMARY },
      slots: { default: [ BUTTON_TEXT, ' ' , h('email-icon', '') ] }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });

  it('Icon only button', async () => {
    const buttonWrapper = render(Button, {
      props: { appearance: BUTTON_APPEARANCE.PRIMARY, shape: BUTTON_SHAPE.PILL },
      slots: { default: h('email-icon', '') }
    })
    expect(buttonWrapper.html()).toMatchSnapshot()
  });
});