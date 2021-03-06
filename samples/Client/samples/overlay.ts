import * as React from "react"
import * as ReactDOM from "react-dom"
import {List, Map, Set} from "immutable"
import * as Immutable from "immutable"
import * as Moment from 'moment'
import {UrlTemplate, application, get_context, Route, Url, make_url, fallback_url, link_to_route,
Option, C, Mode, unit, bind, string, number, bool, button, selector, multi_selector, label, h1, h2, div, form, image, link, file, overlay,
custom, repeat, all, any, lift_promise, retract, delay,
simple_menu, mk_menu_entry, mk_submenu_entry, MenuEntry, MenuEntryValue, MenuEntrySubMenu,
rich_text, paginate, Page, list, editable_list} from '../../../src/monadic_react'

export let overlay_sample =
  repeat<boolean>(`overlay sample`)(
    visible =>
      any<void, boolean>()(
        [
          any<void, boolean>()([
            _ => string("view")("The overlay is hidden").never<boolean>(),
            _ => button<boolean>("Show overlay")(true)
          ]),
          !visible ?
            _ => unit<void>(null).never<boolean>()
          :
            overlay<void, boolean>()(
              any<void, boolean>()([
                _ => string("view")("This is the overlay").never<boolean>(),
                _ => button<boolean>("X")(false)
              ])
            )
        ]
      )(null)
  )(false).ignore()
