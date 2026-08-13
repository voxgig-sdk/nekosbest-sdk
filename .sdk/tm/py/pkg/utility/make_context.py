# Nekosbest SDK utility: make_context

from projectname_sdk.core.context import NekosbestContext


def make_context_util(ctxmap, basectx):
    return NekosbestContext(ctxmap, basectx)
