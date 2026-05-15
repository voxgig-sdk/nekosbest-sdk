# Nekosbest SDK feature factory

from feature.base_feature import NekosbestBaseFeature
from feature.test_feature import NekosbestTestFeature


def _make_feature(name):
    features = {
        "base": lambda: NekosbestBaseFeature(),
        "test": lambda: NekosbestTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
