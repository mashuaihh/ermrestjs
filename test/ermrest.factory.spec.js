/**
 *
 * Created by shuai on 2/19/16.
 */

var specialData = {
    "schemas": {
    "legacy": {
        "comment": null,
            "tables": {
            "project_protocol_document": {
                "comment": "could be considered an asset/description",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "project_id",
                            "file_id"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "project_protocol_document",
                                "schema_name": "legacy",
                                "column_name": "file_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "file",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "project_protocol_document",
                                "schema_name": "legacy",
                                "column_name": "project_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "project",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "project_protocol_document",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {},
                        "name": "project_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {},
                        "name": "file_id"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "human_gender": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "human_gender",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_experiment_type": {
                "comment": null,
                    "kind": "table",
                    "keys": [
                    {
                        "comment": "vocabulary",
                        "annotations": {},
                        "unique_columns": [
                            "dataset_id",
                            "experiment_type"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_experiment_type",
                                "schema_name": "legacy",
                                "column_name": "experiment_type"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "experiment_type",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_experiment_type",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_experiment_type",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int4"
                        },
                        "annotations": {},
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "facetOrder": [
                                "10"
                            ]
                        },
                        "name": "experiment_type"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_somite_count": {
                "comment": null,
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "somite_count",
                            "dataset_id"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_somite_count",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_somite_count",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ],
                            "tag:misd.isi.edu,2015:hidden": null
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "facetOrder": [
                                4
                            ]
                        },
                        "name": "somite_count"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset": {
                "comment": "this is an asset/collection",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": "vocabulary",
                        "annotations": {},
                        "unique_columns": [
                            "id"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "thumbnail"
                            }
                        ],
                        "annotations": {
                            "comment": [
                                "thumbnail"
                            ]
                        },
                        "referenced_columns": [
                            {
                                "table_name": "file",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "project"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "project",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "owner"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "person",
                                "schema_name": "legacy",
                                "column_name": "username"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "hidden"
                            ],
                            "tag:misd.isi.edu,2015:hidden": null
                        },
                        "name": "id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "top"
                            ]
                        },
                        "name": "accession"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "url"
                            ],
                            "tag:misd.isi.edu,2015:url": {
                                "pattern": "http://www.ncbi.nlm.nih.gov/pubmed/{pubmed_id}"
                            },
                            "description": {
                                "url_pattern": "http://www.ncbi.nlm.nih.gov/pubmed/{value}",
                                "display": "PubMed ID"
                            }
                        },
                        "name": "pubmed_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "title"
                            ]
                        },
                        "name": "title"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "top"
                            ],
                            "description": {
                                "display": "Investigator"
                            }
                        },
                        "name": "owner"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "hidden"
                            ],
                            "tag:misd.isi.edu,2015:hidden": null
                        },
                        "name": "project"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "bottom"
                            ]
                        },
                        "name": "funding"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "text",
                                "unsortable",
                                "bottom",
                                "summary",
                                "hidden"
                            ]
                        },
                        "name": "summary"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "text",
                                "unsortable",
                                "html",
                                "bottom"
                            ]
                        },
                        "name": "description"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "hidden"
                            ],
                            "tag:misd.isi.edu,2015:hidden": null
                        },
                        "name": "thumbnail"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "default"
                    ],
                        "description": {
                        "display": "FaceBase Data"
                    }
                }
            },
            "dataset_instrument": {
                "comment": null,
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "dataset_id",
                            "instrument"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_instrument",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_instrument",
                                "schema_name": "legacy",
                                "column_name": "instrument"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "instrument",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_instrument",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "facetOrder": [
                                9
                            ]
                        },
                        "name": "instrument"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "file": {
                "comment": "asset/object",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "id"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "file",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {},
                        "name": "id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "name"
                            ]
                        },
                        "name": "filename"
                    },
                    {
                        "comment": "asset/reference",
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "thumbnail",
                                "viewer",
                                "download"
                            ]
                        },
                        "name": "uri"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "type"
                            ]
                        },
                        "name": "content_type"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "orderby"
                            ]
                        },
                        "name": "bytes"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "timestamptz"
                        },
                        "annotations": {},
                        "name": "timestamp"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "image"
                            ]
                        },
                        "name": "image_width"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {},
                        "name": "image_height"
                    },
                    {
                        "comment": "asset/thumbnail",
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "preview"
                            ]
                        },
                        "name": "preview"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ],
                        "description": {
                        "viewer_url": "https://www.facebase.org/_viewer/xtk/view.html",
                            "preview_url": "https://www.facebase.org/_viewer/xtk/view_on_load.html",
                            "enlarge_url": "https://www.facebase.org/_viewer/xtk/view.html"
                    }
                }
            },
            "mouse_anatomic_source": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "mouse_anatomic_source",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "human_phenotype": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "human_phenotype",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_data_type": {
                "comment": null,
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "dataset_id",
                            "data_type"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_data_type",
                                "schema_name": "legacy",
                                "column_name": "data_type"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "data_type",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_data_type",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_data_type",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "top"
                            ],
                            "facetOrder": [
                                2
                            ]
                        },
                        "name": "data_type"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "human_age_stage": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": "vocabulary",
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "human_age_stage",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_mouse_age_stage": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_age_stage",
                                "schema_name": "legacy",
                                "column_name": "mouse_age_stage"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "mouse_age_stage",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_age_stage",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_mouse_age_stage",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "top"
                            ],
                            "facetOrder": [
                                3
                            ]
                        },
                        "name": "mouse_age_stage"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_zebrafish_genotype": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_zebrafish_genotype",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_zebrafish_genotype",
                                "schema_name": "legacy",
                                "column_name": "zebrafish_genotype"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "zebrafish_genotype",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_zebrafish_genotype",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "facetOrder": [
                                7
                            ]
                        },
                        "name": "zebrafish_genotype"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_image": {
                "comment": "this contains asset/thumbnails",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "dataset_id",
                            "image_id"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_image",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_image",
                                "schema_name": "legacy",
                                "column_name": "image_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "file",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_image",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": "this is an asset/thumbnail",
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "image"
                            ],
                            "description": {
                                "display": "Image"
                            }
                        },
                        "name": "image_id"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association",
                        "image"
                    ]
                }
            },
            "dataset_mouse_phenotype": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_phenotype",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_phenotype",
                                "schema_name": "legacy",
                                "column_name": "mouse_phenotype"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "mouse_phenotype",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_mouse_phenotype",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "facetOrder": [
                                5
                            ]
                        },
                        "name": "mouse_phenotype"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_human_enhancer": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_enhancer",
                                "schema_name": "legacy",
                                "column_name": "human_enhancer"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "human_enhancer",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_enhancer",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_human_enhancer",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "facetOrder": [
                                8
                            ]
                        },
                        "name": "human_enhancer"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_mouse_mutation": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_mutation",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_mutation",
                                "schema_name": "legacy",
                                "column_name": "mouse_mutation"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "mouse_mutation",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_mouse_mutation",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "top"
                            ]
                        },
                        "name": "mouse_mutation"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_human_gender": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": "vocabulary",
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_gender",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_gender",
                                "schema_name": "legacy",
                                "column_name": "human_gender"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "human_gender",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_human_gender",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "human_gender"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "mouse_mutation": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": "vocabulary",
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "mouse_mutation",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "zebrafish_anatomic_source": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "zebrafish_anatomic_source",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "instrument": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "instrument",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "zebrafish_age_stage": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "zebrafish_age_stage",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "project_member": {
                "comment": "domain",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "username",
                            "project_id"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "project_member",
                                "schema_name": "legacy",
                                "column_name": "project_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "project",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "project_member",
                                "schema_name": "legacy",
                                "column_name": "username"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "person",
                                "schema_name": "legacy",
                                "column_name": "username"
                            }
                        ]
                    }
                ],
                    "table_name": "project_member",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {},
                        "name": "project_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "username"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_mouse_genotype": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_genotype",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_genotype",
                                "schema_name": "legacy",
                                "column_name": "mouse_genotype"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "mouse_genotype",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_mouse_genotype",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "top"
                            ],
                            "facetOrder": [
                                6
                            ]
                        },
                        "name": "mouse_genotype"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_human_phenotype": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_phenotype",
                                "schema_name": "legacy",
                                "column_name": "human_phenotype"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "human_phenotype",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_phenotype",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_human_phenotype",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "human_phenotype"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_geo": {
                "comment": "references to external GEO numbers for curated (gds) and submitted (gse) data",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "dataset_id"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_geo",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_geo",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ],
                            "tag:misd.isi.edu,2015:hidden": null
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": "http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=",
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "url"
                            ],
                            "tag:misd.isi.edu,2015:url": {
                                "pattern": "http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc={geo_gds}"
                            },
                            "description": {
                                "url_pattern": "http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc={value}",
                                "display": "GEO Curated"
                            }
                        },
                        "name": "geo_gds"
                    },
                    {
                        "comment": "http://www.ncbi.nlm.nih.gov/geo/geo2r/?acc=",
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "url"
                            ],
                            "tag:misd.isi.edu,2015:url": {
                                "pattern": "http://www.ncbi.nlm.nih.gov/geo/geo2r/?acc={geo_gse}",
                                "caption": "{geo_gse}"
                            },
                            "description": {
                                "url_pattern": "http://www.ncbi.nlm.nih.gov/geo/geo2r/?acc={value}",
                                "display": "GEO Submitted"
                            }
                        },
                        "name": "geo_gse"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association",
                        "geo"
                    ]
                }
            },
            "mouse_genotype": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "mouse_genotype",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "mouse_genetic_background": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "mouse_genetic_background",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_preview": {
                "comment": "this contains asset/preview",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "preview_id",
                            "dataset_id"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_preview",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_preview",
                                "schema_name": "legacy",
                                "column_name": "preview_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "file",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_preview",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": "this is an asset/preview",
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "preview"
                            ],
                            "description": {
                                "display": "Preview"
                            }
                        },
                        "name": "preview_id"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association",
                        "preview"
                    ]
                }
            },
            "data_type": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "data_type",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_mouse_genetic_background": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_genetic_background",
                                "schema_name": "legacy",
                                "column_name": "mouse_genetic_background"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "mouse_genetic_background",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_genetic_background",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_mouse_genetic_background",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "mouse_genetic_background"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_mouse_enhancer": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_enhancer",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_enhancer",
                                "schema_name": "legacy",
                                "column_name": "mouse_enhancer"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "mouse_enhancer",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_mouse_enhancer",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "mouse_enhancer"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_human_age_stage": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_age_stage",
                                "schema_name": "legacy",
                                "column_name": "human_age_stage"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "human_age_stage",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_age_stage",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_human_age_stage",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "human_age_stage"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_zebrafish_anatomic_source": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_zebrafish_anatomic_source",
                                "schema_name": "legacy",
                                "column_name": "zebrafish_anatomic_source"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "zebrafish_anatomic_source",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_zebrafish_anatomic_source",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_zebrafish_anatomic_source",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "zebrafish_anatomic_source"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "project_investigator": {
                "comment": null,
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "username",
                            "project_id"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "project_investigator",
                                "schema_name": "legacy",
                                "column_name": "project_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "project",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "project_investigator",
                                "schema_name": "legacy",
                                "column_name": "username"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "person",
                                "schema_name": "legacy",
                                "column_name": "username"
                            }
                        ]
                    }
                ],
                    "table_name": "project_investigator",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {},
                        "name": "project_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "username"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "mouse_enhancer": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "mouse_enhancer",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "mouse_age_stage": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": "vocabulary",
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "mouse_age_stage",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_mouse_gene": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_gene",
                                "schema_name": "legacy",
                                "column_name": "mouse_gene"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "mouse_gene",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_gene",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_mouse_gene",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "top"
                            ]
                        },
                        "name": "mouse_gene"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_chromosome": {
                "comment": null,
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "chromosome",
                            "end_position",
                            "dataset_id",
                            "start_position"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_chromosome",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_chromosome",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ],
                            "tag:misd.isi.edu,2015:hidden": null
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "top"
                            ],
                            "description": {
                                "display": "Mouse Chromosome"
                            }
                        },
                        "name": "chromosome"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {},
                        "name": "start_position"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {},
                        "name": "end_position"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "dataset_file": {
                "comment": "this is an asset/association table",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "dataset_id",
                            "file_id"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": "vocabulary",
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_file",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_file",
                                "schema_name": "legacy",
                                "column_name": "file_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "file",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_file",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": "this is an asset/reference",
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "viewer",
                                "download"
                            ],
                            "description": {
                                "display": "File"
                            }
                        },
                        "name": "file_id"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association",
                        "viewer",
                        "download"
                    ]
                }
            },
            "zebrafish_genotype": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "zebrafish_genotype",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "mouse_phenotype": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "mouse_phenotype",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_human_anatomic_source": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_anatomic_source",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": "could be considered an asset/description",
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_human_anatomic_source",
                                "schema_name": "legacy",
                                "column_name": "human_anatomic_source"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "human_anatomic_source",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_human_anatomic_source",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "human_anatomic_source"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "external_reference": {
                "comment": "asset/object",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "id",
                            "uri"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "external_reference",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "external_reference",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ],
                            "tag:misd.isi.edu,2015:hidden": null
                        },
                        "name": "id"
                    },
                    {
                        "comment": "asset/reference",
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "url"
                            ],
                            "tag:misd.isi.edu,2015:url": {},
                            "description": {
                                "display": "External Reference URL"
                            }
                        },
                        "name": "uri"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ],
                            "tag:misd.isi.edu,2015:hidden": null
                        },
                        "name": "link_text"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "description": {
                                "display": "External Reference"
                            }
                        },
                        "name": "description"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association",
                        "reference"
                    ],
                        "tag:misd.isi.edu,2015:url": {
                        "pattern": "{uri}",
                            "caption": "{description}",
                            "presentation": "embed",
                            "width": 400,
                            "height": 400
                    }
                }
            },
            "dataset_zebrafish_age_stage": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_zebrafish_age_stage",
                                "schema_name": "legacy",
                                "column_name": "zebrafish_age_stage"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "zebrafish_age_stage",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_zebrafish_age_stage",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_zebrafish_age_stage",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "zebrafish_age_stage"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "project": {
                "comment": "domain",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": "vocabulary",
                        "annotations": {},
                        "unique_columns": [
                            "id"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "project",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {},
                        "name": "id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "grant_number"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "description"
                    },
                    {
                        "comment": "url for more information on this project on externalre site",
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "url"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "person": {
                "comment": "domain",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "username"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "person",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "username"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "first_name"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "middle_name"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "last_name"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "email"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "json"
                        },
                        "annotations": {},
                        "name": "degrees"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "json"
                        },
                        "annotations": {},
                        "name": "affiliations"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "experiment_type": {
                "comment": null,
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "experiment_type",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "human_anatomic_source": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "human_anatomic_source",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "human_enhancer": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "human_enhancer",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "mouse_gene": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "mouse_gene",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_organism": {
                "comment": null,
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "dataset_id",
                            "organism"
                        ]
                    }
                ],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_organism",
                                "schema_name": "legacy",
                                "column_name": "organism"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "organism",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_organism",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_organism",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {
                            "comment": [
                                "top"
                            ],
                            "facetOrder": [
                                1
                            ]
                        },
                        "name": "organism"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            },
            "organism": {
                "comment": "vocabulary",
                    "kind": "table",
                    "keys": [
                    {
                        "comment": null,
                        "annotations": {},
                        "unique_columns": [
                            "term"
                        ]
                    }
                ],
                    "foreign_keys": [],
                    "table_name": "organism",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "term"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "exclude"
                    ]
                }
            },
            "dataset_mouse_anatomic_source": {
                "comment": null,
                    "kind": "table",
                    "keys": [],
                    "foreign_keys": [
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_anatomic_source",
                                "schema_name": "legacy",
                                "column_name": "dataset_id"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "dataset",
                                "schema_name": "legacy",
                                "column_name": "id"
                            }
                        ]
                    },
                    {
                        "comment": null,
                        "foreign_key_columns": [
                            {
                                "table_name": "dataset_mouse_anatomic_source",
                                "schema_name": "legacy",
                                "column_name": "mouse_anatomic_source"
                            }
                        ],
                        "annotations": {},
                        "referenced_columns": [
                            {
                                "table_name": "mouse_anatomic_source",
                                "schema_name": "legacy",
                                "column_name": "term"
                            }
                        ]
                    }
                ],
                    "table_name": "dataset_mouse_anatomic_source",
                    "schema_name": "legacy",
                    "column_definitions": [
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "int8"
                        },
                        "annotations": {
                            "comment": [
                                "dataset"
                            ]
                        },
                        "name": "dataset_id"
                    },
                    {
                        "comment": null,
                        "default": null,
                        "type": {
                            "typename": "text"
                        },
                        "annotations": {},
                        "name": "mouse_anatomic_source"
                    }
                ],
                    "annotations": {
                    "comment": [
                        "association"
                    ]
                }
            }
        },
        "annotations": {},
        "schema_name": "legacy"
    },
    "public": {
        "comment": "standard public schema",
            "tables": {},
        "annotations": {},
        "schema_name": "public"
    }
}

};

describe('ERMrest,', function () {
    var ERMrestClient;
    var ermrestUrl = 'https://example.com/ermrest';
    var $httpBackend, $http;

    beforeEach(module('ERMrest'));
    beforeEach(module('ngMock'));
    beforeEach(inject(function ($injector) {
        $http = $injector.get('$http');
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET(ermrestUrl + '/catalog/1/schema').respond(specialData);
        $httpBackend.expectGET('');
    }));

    describe('after injecting factory,', function () {
        var catalog, table, schemas;
        beforeEach(inject(function (ermrestClientFactory) {
            ERMrestClient = ermrestClientFactory.getClient(ermrestUrl);
            catalog = ERMrestClient.getCatalog(1);
            catalog.introspect();
            schemas = catalog.getSchemas();
            $httpBackend.flush();
        }));

        it('ERMrest namespace should exist', function(done){
            expect(ERMrest).toBeDefined();
            console.log(ERMrestClient.uri);
            done();
        });

        it('Ermrest Factory should exist', function(done) {
            expect(ERMrestClient).toBeDefined();
            done();
        });

        it('Ermrest Factory should return catalog', function(done) {
            expect(schemas).toBeDefined();
            console.log(schemas);
            done();
        });

        xit('Table', function (done) {
            table = schemas['rbk'].getTable('roi');
            done();
        });
    });


});
