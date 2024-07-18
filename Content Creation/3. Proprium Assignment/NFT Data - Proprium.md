## NFT Data - Proprium

**Blender Collections Tab:**  
![collections_tab.png](../../_resources/collections_tab.png)

* * *
## Data Types and Assignment
Assignment of Proprium data is  done at the collection level in Blender.  This means, objects in a given collection share the Proprium that is assigned to them.  Any references to object in the data itself, should also be part of the collection,

|![add_val_prop_btn.png](../../_resources/add_val_prop_btn.png) |Value Properties|
|------------------------------------------------------------|-----------------------------------------------|
<details><summary>Numeric values represented by meters or sliders</summary> 

* * *
![val_prop_settings.png](../../_resources/val_prop_settings.png)
A unique name should be assigned to the property.
![valprop_name.png](../../_resources/valprop_name.png)
* * *
Value Properties should be used for values of type 'Int' or 'Float'. 
![val_prop_value_type.png](../../_resources/val_prop_value_type.png)
* * *
If 'Show Widget' is true, a widget will be created for the data when viewed in the Browser.
![val_prop_widget.png](../../_resources/val_prop_widget.png)
* * *
The action types are predefined behaviors for the the way the data value may be updated.
![val_prop_action_type.png](../../_resources/val_prop_action_type.png)
Action Types:
-Incremental (Value can Only be incremented, by Amount)
-Decremental (Value can Only be decremented, by Amount)
-Bicremental (Value can be incremented or decremented, by Amount)
-Setter (Value can be incremented or decremented Arbitrarily)
-Static (Value cannot be changed)
***
![val_prop_num_presets.png](../../_resources/val_prop_num_presets.png)
-Default: The default value for this property.
-Min: The minimum value for this property.
-Max: The maximum value for this property.
-Amount: The amount the property will increment or decrement.
***

</details>


|![add_method_call_btn.png](../../_resources/add_method_call_btn.png) |Method Call|
|------------------------------------------------------------|-----------------------------------------------|

<details>
<summary>
A string that maps to a method name in  a Motoko contract.
</summary>


![metod_call_props.png](../../_resources/metod_call_props.png)
A unique name should be assigned to the property.
![method_call_name.png](../../_resources/method_call_name.png)
***
Method accepts an optional single parameter of type Int or String.
![method_call_param.png](../../_resources/method_call_param.png)
***

</details>


|![add_mesh_toggle_btn.png](../../_resources/add_mesh_toggle_btn.png) |Mesh Property|
|------------------------------------------------------------|-----------------------------------------------|

<details>
<summary>
Toggle visibility of a mesh reference.
</summary> 

![mesh_prop_fields.png](../../_resources/mesh_prop_fields.png)
A unique name should be assigned to the property.
![mesh_prop_name.png](../../_resources/mesh_prop_name.png)
***
Reference to mesh in scene must be assigned
![mesh_prop_ref.png](../../_resources/mesh_prop_ref.png)
***
![mesh_prop_widget_type.png](../../_resources/mesh_prop_widget_type-1.png)
To update the mesh visibility state, widget must be set to 'Toggle'
***
![mesh_prop_visible.png](../../_resources/mesh_prop_visible.png)
Assign the initial state of the mesh with the 'Visible' check-box.
***

</details>


|![add_mesg_set_btn.png](../../_resources/add_mesg_set_btn.png) |Mesh Set|
|------------------------------------------------------------|-----------------------------------------------|
<details>
<summary>
A set of mesh references, of which one is selected and visible.
</summary> 



![mesh_set_fields.png](../../_resources/mesh_set_fields.png)
A unique name should be assigned to the property.
![mesh_set_name.png](../../_resources/mesh_set_name.png)
***
![mesh_prop_widget_type.png](../../_resources/mesh_prop_widget_type.png)
To update the mesh visibility state, widget must be set to 'Selector'
***
![mesh_set_refs.png](../../_resources/mesh_set_refs.png)
Any number of mesh references may be assigned.
***

</details>


|![morph_set_btn.png](../../_resources/morph_set_btn.png)|Morph Set|
|------------------------------------------------------------|-----------------------------------------------|
<details>
<summary>
For each morph in the set, a slider is created to control it.
</summary> 

![morph_set_fields.png](../../_resources/morph_set_fields.png)
A unique name should be assigned to the property.
![morph_set_name.png](../../_resources/morph_set_name.png)
***
![morph_set_widget.png](../../_resources/morph_set_widget.png)
Multi-widget type means, multiple widgets are created, one for each in the set.
***
Any number of morph references can be assigned to the set.
![morph_set_refs.png](../../_resources/morph_set_refs.png)
***

</details>


|![add_anim_toggle_btn.png](../../_resources/add_anim_toggle_btn.png) |Animation Property|
|------------------------------------------------------------|-----------------------------------------------|
<details>
<summary>
Toggle an animation for a mesh.
</summary>


![anim_prop_fields.png](../../_resources/anim_prop_fields.png)
A unique name should be assigned to the property.
![anim_prop_name.png](../../_resources/anim_prop_name.png)
***
To play or stop the animation, widget must be set to 'Toggle'
![anim_prop_widget.png](../../_resources/anim_prop_widget.png)
***
The 'Loop' attribute determines how the animation plays
![anim_prop_loop_type.png](../../_resources/anim_prop_loop_type.png)
-Loop Forever (Animation continues to play indefinitely)
-Loop Once (Animation plays once and then stops)
-Clamp Toggle (On state, is animation holding it's last frame, Off ifs frame 0)
-Clamp (Plays once and hold it's last frame)
-Ping Pong (Plays to the end, then reverses and plays to the beginning, indefinitely)
***
The 'Weight' attribute controls how much the model is affected by the animation.  
![anim_prop_weight.png](../../_resources/anim_prop_weight.png)
***
The 'Play' checkmark, is the default state for the animation. If checked, it plays on start.
![anim_prop_play.png](../../_resources/anim_prop_play.png)
***


</details>


|![add_mat_ref_btn.png](../../_resources/add_mat_ref_btn.png) |Material Property|
|------------------------------------------------------------|-----------------------------------------------|
<details>
<summary>
Generates multiple widgets in for the material in the browser, so attributes can be updated and saved.
</summary> 


![mat_prop_fields.png](../../_resources/mat_prop_fields.png)
A unique name should be assigned to the property.
![mat_prop_name.png](../../_resources/mat_prop_name.png)
***
![morph_set_widget.png](../../_resources/morph_set_widget.png)
Multi-widget type means, multiple widgets are created for each attribute in the material.
***
The material reference must be assigned for data item to work.
![mat_prop_mat_ref.png](../../_resources/mat_prop_mat_ref.png)
***
If the material is meant to have reflective or iridescent properties, the corresponding checkboxes must be checked.
![mat_prop_reflective_irridescent.png](../../_resources/mat_prop_reflective_irridescent.png)
***

</details>

|![add_mat_set_btn.png](../../_resources/add_mat_set_btn.png) |Material Set|
|------------------------------------------------------------|-----------------------------------------------|
<details>
<summary>
Used to create a set of materials that can be applied to a model, or models.
</summary>


![mat_prop_fields.png](../../_resources/mat_prop_fields-2.png)
A unique name should be assigned to the property.
![mat_set_name.png](../../_resources/mat_set_name.png)
***
![mesh_prop_widget_type.png](../../_resources/mesh_prop_widget_type.png)
To update the material on the model(s), widget must be set to 'Selector'
***
The 'ID' attribute pertains to the material id, assigned to the mesh.(The set of faces, the material is applied to)
![mat_set_id.png](../../_resources/mat_set_id.png)
***
The editor section allows you to add and remove materials to the set.
![mat_prop_fields.png](../../_resources/mat_prop_fields-1.png)
***

</details>


***
## Menu Placement
The Proprium menus that are generated in the browser are created at a preset location in relation to the size of the collection.  If you want to have them generated at a custom position, use the 'Add Menu Transform' button, to spawn a dummy object which can be moved around, and will be used assign a custom position to the menu in the browser.


![add_menu_transform_btn.png](../../_resources/add_menu_transform_btn.png)


***
## Data Types Organization and Name Re-Mapping
When the Proprium menus are generated in the browser, there is a section for each collection with data assigned.  The sections are grouped by data type, for example, if you create several 'Value Properties', within a collection, By default they are grouped into a section Labeled 'Value Properties'.

The default data type names can be renamed by re-mapping them in the 'Property Names:' Section.
![property_name_remapping.png](../../_resources/property_name_remapping.png)
***

