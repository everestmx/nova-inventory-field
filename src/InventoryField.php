<?php

namespace Everestmx\InventoryField;

use Laravel\Nova\Fields\Markdown;

/**
 * Class InventoryField
 * @package Everestmx\InventoryField
 */
class InventoryField extends Markdown
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'inventory-field';
}
